import clsx from "clsx";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowScroll } from "react-use";

import { Button } from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import { RootState } from "@/store";
import { openSideBar, openTopBar, openUserBar } from "@/store/pageSlice";

import AvatarCircle from "@/components/molecules/avatar-circle";
import Box from "@/components/atoms/box";
import Brand from "@/components/atoms/brand";
import { ThemeModeToggle } from "./theme-mode-toggle";

const closerButton = {
  initial: {},
  pressed: { scale: 0.9 },
  hover: {
    y: 70,
    opacity: 1,
  },
  out: {
    opacity: 1,
    y: 60,
    x: 45,
    transition: {
      duration: 0.6,
    },
  },
  in: {
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const animator = {
  hide: {
    y: -64,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

function TopMenu({ className }: { className?: string }) {
  const { y } = useWindowScroll();
  const dispatch = useDispatch();
  const [scrollDirection, setScrollDirection] = useState("IDEAL");
  const sideBarOpen = useSelector((state: RootState) => state.page.sideBarOpen);
  const topBarOpen = useSelector((state: RootState) => state.page.topBarOpen);
  const userBarOpen = useSelector((state: RootState) => state.page.userBarOpen);
  const store = useSelector((state: RootState) => state.base.store);
  const user = useSelector((state: RootState) => state.base.user);

  const callback = useCallback(
    (event: any) => {
      if (sideBarOpen || userBarOpen) {
        return setScrollDirection("IDEAL");
      }
      if ((event.wheelDelta && event.wheelDelta > 0) || event.deltaY < 0) {
        return setScrollDirection("UP");
      } else {
        setScrollDirection("DOWN");
      }
    },
    [sideBarOpen, userBarOpen]
  );

  const shouldHide = useMemo(() => {
    return topBarOpen && (y <= 100 || scrollDirection === "UP");
  }, [topBarOpen, scrollDirection, y]);

  useEffect(() => {
    document.body.addEventListener("wheel", callback);
    return () => document.body.removeEventListener("file-upload", callback);
  }, [callback]);

  return (
    <motion.nav
      className={clsx(
        "border-b w-full h-[60px] align-middle items-center fixed px-4 flex justify-between",
        className
      )}
      initial="show"
      variants={animator}
      transition={{ type: "spring", stiffness: 100 }}
      animate={shouldHide ? "show" : "hide"}
    >
      <Box className="w-auto" gap={6}>
        {store && (
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => dispatch(openSideBar())}
          >
            <Icon name={sideBarOpen ? "IoClose" : "HiMenuAlt2"} />
          </Button>
        )}

        <Brand fontSize={"small"} iconSize={"small"} />
      </Box>

      <Box className="w-auto" gap={2}>
        <ThemeModeToggle />
        <motion.div
          initial="initial"
          whileTap="pressed"
          transition={{ type: "spring", stiffness: 100 }}
          animate={topBarOpen ? "in" : "out"}
          variants={closerButton}
          className="hidden w-auto h-auto right-4 md:flex"
          tabIndex={-1}
        >
          <Button
            variant={"outline"}
            size={"icon"}
            animation={"scale"}
            onClick={() => {
              if (!topBarOpen) {
                setScrollDirection("UP");
              }
              dispatch(openTopBar());
            }}
          >
            <Icon name={topBarOpen ? "BiShow" : "BiHide"} />
          </Button>
        </motion.div>

        <Button
          size={"none"}
          variant={"transparent"}
          onClick={() => dispatch(openUserBar())}
        >
          <AvatarCircle name={user.firstName} withAnimation={true} />
        </Button>
      </Box>
    </motion.nav>
  );
}

export default TopMenu;
