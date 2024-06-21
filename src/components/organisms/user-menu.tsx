import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@/components/atoms/icon";
import { RootState } from "@/store";
import { openUserBar } from "@/store/pageSlice";
import { Separator } from "../atoms/separator";
import { classNames } from "@/lib/utils";
import UserBadge from "../molecules/user-badge";
import Box from "@/components/atoms/box";
import { Button } from "../atoms/button";
import { animateDecorator } from "@/lib/animate";

const variants = {
  initial: { x: 400, transition: { duration: 0.3, ease: "linear" } },
  full: {
    x: 0,
    transition: { delayChildren: 0.5, duration: 0.3, ease: "linear" },
  },
};

function UserMenu({ className }: { className?: string }) {
  const userBarOpen = useSelector((state: RootState) => state.page.userBarOpen);
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.base.store);
  const user = useSelector((state: RootState) => state.base.user);

  useEffect(() => {
    document.body.style.overflow = userBarOpen ? "hidden" : "unset";
  }, [userBarOpen]);

  const handleSidebarToggle = () => dispatch(openUserBar());

  return (
    <>
      <motion.div
        initial="hide"
        variants={animateDecorator}
        animate={userBarOpen ? "show" : "hide"}
        onClick={handleSidebarToggle}
        className="fixed left-0 w-screen h-full bg-foreground/30 min-h-fill"
      />
      <motion.div
        initial="initial"
        animate={userBarOpen ? "full" : "initial"}
        variants={variants}
        className={classNames(
          "side-menu bg-background p-6 z-50 relative right-0 items-start rounded-tl-xl rounded-bl-xl w-[300px]",
          className
        )}
      >
        <Box preset={"stack-start"}>
          <Box>
            <UserBadge
              firstName={user.firstName}
              lastName={user?.lastName}
              username={user.username}
            />
            <Button
              variant={"transparent"}
              size={"icon"}
              onClick={handleSidebarToggle}
              animation={"scale"}
            >
              <Icon name={"IoClose"} />
            </Button>
          </Box>
          <Separator />
        </Box>
      </motion.div>
    </>
  );
}

export default UserMenu;
