import SideMenu from "@/components/organisms/side-menu";
import TopMenu from "@/components/organisms/top-menu";
import UserMenu from "@/components/organisms/user-menu";
import { shouldBeLoggedIn } from "@/lib/middleware";
import { meQueryOptions, storeQueryOptions } from "@/helpers/query-options";
import { classNames } from "@/lib/utils";
import { RootState } from "@/store";
import { setStore, setUser } from "@/store/baseSlice";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import Box from "@/components/atoms/box";

export const Route = createFileRoute("/store/$slug/_screen")({
  beforeLoad: shouldBeLoggedIn as any,
  component: StoreLayout,
  loader: async ({ context }) => {
    const queryClient = context.queryClient;
    const [meData, storeData] = await Promise.all([
      queryClient.ensureQueryData(meQueryOptions()),
      queryClient.ensureQueryData(storeQueryOptions()),
    ]);

    if (meData) {
      context.store.dispatch(setUser(meData));
    }

    console.log({ storeData });
    if (storeData) {
      context.store.dispatch(setStore(storeData));
    }
  },
});

function StoreLayout() {
  const topBarOpen = useSelector((state: RootState) => state.page.topBarOpen);

  return (
    <Box variant={"page-screen"} preset={"row-stretch"} as="main">
      <SideMenu />
      <Box variant={"page-content"} preset={"row-stretch"} as="section">
        <TopMenu
          className="fixed z-30 block w-full bg-background"
          showSideBar={true}
        />
        <Box
          variant={"page-fill"}
          className={classNames("transition-all duration-300 bg-paper", {
            "pt-[61px]": topBarOpen,
          })}
        >
          <Outlet />
        </Box>
      </Box>
      <UserMenu />
    </Box>
  );
}
