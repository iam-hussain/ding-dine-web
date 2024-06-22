import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon, { IconKey } from "@/components/atoms/icon";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { RootState } from "@/store";
import { openSideBar } from "@/store/pageSlice";
import { Separator } from "../atoms/separator";
import { animateDecorator } from "@/lib/animate";
import { classNames } from "@/lib/utils";
import Box from "../atoms/box";
import { Button } from "../atoms/button";
import AvatarBadge from "../molecules/avatar-badge";
import { CustomLink } from "../atoms/link";

type Menu = {
  icon: IconKey;
  label: string;
  active?: boolean;
  link?: string;
};

const appMenus: Menu[] = [
  { icon: "MdOutlineSpaceDashboard", label: "Dashboard", link: "/dashboard" },
  { icon: "LuPrinter", label: "Billing System", link: "/store/pos" },
  { icon: "RiBillLine", label: "Orders Display", link: "/store/orders" },
  {
    icon: "MdOutlineSoupKitchen",
    label: "Kitchen Display",
    link: "/store/kitchen",
  },
  {
    icon: "PiShoppingCartSimpleBold",
    label: "Customer Display",
    link: "/store/display",
  },
];

const settingMenus: Menu[] = [
  { icon: "MdStorefront", label: "Store", link: "/store" },
  {
    icon: "HiOutlineCalendar",
    label: "Availability",
    link: "/store/availability",
  },
  { icon: "MdOutlineFastfood", label: "Products", link: "/store/product" },
  { icon: "LuTag", label: "Category", link: "/store/category" },
  {
    icon: "LuGroup",
    label: "Kitchen Group",
    link: "/store/group",
  },
  { icon: "IoSettingsOutline", label: "Settings", link: "/store/settings" },
];

const variants = {
  initial: { x: -400, transition: { duration: 0.3, ease: "linear" } },
  full: {
    x: 0,
    transition: { delayChildren: 0.5, duration: 0.3, ease: "linear" },
  },
};

function SideMenu({ className }: { className?: string }) {
  const sideBarOpen = useSelector((state: RootState) => state.page.sideBarOpen);
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.base.store);

  useEffect(() => {
    document.body.style.overflow = sideBarOpen ? "hidden" : "unset";
  }, [sideBarOpen]);

  const handleSidebarToggle = () => dispatch(openSideBar());

  return (
    <>
      <motion.div
        initial="hide"
        variants={animateDecorator}
        animate={sideBarOpen ? "show" : "hide"}
        onClick={handleSidebarToggle}
        className="fixed left-0 w-screen h-full bg-foreground/30 min-h-fill"
      />
      <motion.div
        initial="initial"
        animate={sideBarOpen ? "full" : "initial"}
        variants={variants}
        className={classNames(
          "side-menu bg-background p-6 z-50 relative left-0 items-start rounded-tr-xl rounded-br-xl w-[300px]",
          className
        )}
      >
        <Box preset={"stack-start"} className="h-full overflow-hidden">
          <Box>
            <AvatarBadge hed={store.name} dek={store.slug} />
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
            <Box preset={"stack-start"} gap={1}>
              {appMenus.map((each, key) => (
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
              <Separator className="my-2" />
              {settingMenus.map((each, key) => (
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
        </Box>
      </motion.div>
    </>
  );
}

export default SideMenu;
