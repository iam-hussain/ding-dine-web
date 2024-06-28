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

export const Route = createFileRoute("/store/$slug/_fluid")({
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
    <div className="main-wrapper">
      <SideMenu />
      <main className={"page-main bg-paper"}>
        <TopMenu
          className="fixed z-30 block w-full bg-background"
          showSideBar={true}
        />
        <div
          className={classNames(
            "h-full min-h-svh w-full transition-all duration-300",
            {
              "pt-[61px]": topBarOpen,
            }
          )}
        >
          <Outlet />
        </div>
      </main>
      <UserMenu />
    </div>
  );
}
