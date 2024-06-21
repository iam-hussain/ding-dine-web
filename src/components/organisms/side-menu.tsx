import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@/components/atoms/container";
import Icon, { IconKey } from "@/components/atoms/icon";
import { ScrollArea } from "@/components/atoms/scroll-area";
import MenuItem from "@/components/molecules/menu-item";
import { RootState } from "@/store";
import { openSideBar } from "@/store/pageSlice";
import { Separator } from "../atoms/separator";
import Loader from "../molecules/loader";
import UserAvatar from "../molecules/user-avatar";
import { animateDecorator } from "@/lib/animate";
import { classNames } from "@/lib/utils";
import Box from "../atoms/box";
import { Button } from "../atoms/button";

type Menu = {
  icon: IconKey;
  label: string;
  active?: boolean;
  link?: string;
};

const appMenus: Menu[] = [
  { icon: "MdDashboard", label: "Dashboard", link: "/store/dashboard" },
  { icon: "BsPrinterFill", label: "Billing System", link: "/store/pos" },
  { icon: "SiAirtable", label: "Orders Display", link: "/store/orders" },
  { icon: "MdSoupKitchen", label: "Kitchen Display", link: "/store/kitchen" },
  { icon: "FaCartShopping", label: "Customer Display", link: "/store/display" },
];

const settingMenus: Menu[] = [
  { icon: "FaStore", label: "Store", link: "/store" },
  {
    icon: "MdEventAvailable",
    label: "Availability",
    link: "/store/availability",
  },
  { icon: "IoFastFoodSharp", label: "Products", link: "/store/product" },
  { icon: "FaTags", label: "Category", link: "/store/category" },
  { icon: "FaRegObjectGroup", label: "Kitchen Group", link: "/store/group" },
  { icon: "FaSave", label: "Settings", link: "/store/settings" },
];

const variants = {
  initial: { x: -400, transition: { duration: 0.3, ease: "linear" } },
  full: {
    x: 0,
    transition: { delayChildren: 0.5, duration: 0.3, ease: "linear" },
  },
};

const closerButton = {
  initial: { scale: 1 },
  hover: { scale: 1.2 },
  pressed: { scale: 0.8 },
};

function SideMenu({ className }: { className?: string }) {
  const sideBarOpen = useSelector((state: RootState) => state.page.sideBarOpen);
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.base.store);
  const user = useSelector((state: RootState) => state.base.user);

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
        <Box preset={"stack-start"}>
          <Box>
            {store && (
              <div className="w-full h-auto px-4 m-0 mt-auto text-center">
                <p className="pb-1 font-semibold text-md text-foreground/90">
                  {store.name}
                </p>
                <div>
                  {store.printDeck?.map((e: string, i: number) => (
                    <p
                      className="text-xs text-foreground/90"
                      key={`printDeck_${i}`}
                    >
                      {e}
                    </p>
                  ))}
                </div>
              </div>
            )}
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={handleSidebarToggle}
              animation={"scale"}
            >
              <Icon name={"IoClose"} />
            </Button>
          </Box>

          <ScrollArea className="flex justify-end w-full py-4 grow">
            <Container className="flex flex-col gap-3 px-1 my-2 text-right">
              {appMenus.map((each, key) => (
                <MenuItem
                  {...each}
                  key={key}
                  onRedirect={handleSidebarToggle}
                />
              ))}
              <Separator className="my-2 select-none" />
              {settingMenus.map((each, key) => (
                <MenuItem
                  {...each}
                  key={key}
                  onRedirect={handleSidebarToggle}
                />
              ))}
            </Container>
          </ScrollArea>
        </Box>
      </motion.div>
    </>
  );
}

export default SideMenu;
