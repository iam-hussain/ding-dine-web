import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon, { IconKey } from "@/components/atoms/icon";
import { RootState } from "@/store";
import { openUserBar } from "@/store/pageSlice";
import { Separator } from "../atoms/separator";
import { classNames } from "@/lib/utils";
import AvatarBadge from "../molecules/avatar-badge";
import Box from "@/components/atoms/box";
import { Button } from "../atoms/button";
import { animateDecorator } from "@/lib/animate";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CustomLink } from "../atoms/link";

type Menu = {
  icon: IconKey;
  label: string;
  active?: boolean;
  link?: string;
};

const userMenus: Menu[] = [
  { icon: "RiHome4Line", label: "Home", link: "/home" },
  // { icon: "CgProfile", label: "Profile", link: "/profile" },
  { icon: "MdStorefront", label: "Stores", link: "/store" },
  { icon: "MdCardMembership", label: "Subscriptions", link: "/subscriptions" },
  { icon: "IoSettingsOutline", label: "Settings", link: "/settings" },
];

const variants = {
  initial: { x: 400, transition: { duration: 0.3, ease: "linear" } },
  full: {
    x: 0,
    transition: { delayChildren: 0.5, duration: 0.3, ease: "linear" },
  },
};

function UserMenu({ className }: { className?: string }) {
  const dispatch = useDispatch();

  const userBarOpen = useSelector((state: RootState) => state.page.userBarOpen);
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
        <Box preset={"col-start"} className="h-full overflow-hidden" as="nav">
          <Box>
            <AvatarBadge hed={user.fullName} dek={user.username} />
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

          <ScrollArea className="w-full grow">
            <Box preset={"col-start"} gap={1}>
              {userMenus.map((each, key) => (
                <CustomLink
                  key={key}
                  variant={"menu"}
                  iconName={each.icon}
                  to={each.link as any}
                  onClick={() => handleSidebarToggle()}
                >
                  {each.label}
                </CustomLink>
              ))}
            </Box>
          </ScrollArea>

          <Separator />

          <CustomLink
            variant={"menu"}
            iconName={"IoLogOut"}
            to={"/logout"}
            onClick={() => handleSidebarToggle()}
          >
            Logout
          </CustomLink>
        </Box>
      </motion.div>
    </>
  );
}

export default UserMenu;
