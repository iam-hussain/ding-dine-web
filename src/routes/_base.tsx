import SideMenu from "@/components/organisms/side-menu";
import TopMenu from "@/components/organisms/top-menu";
import UserMenu from "@/components/organisms/user-menu";
import { shouldBeLoggedIn } from "@/lib/middleware";
import { meQueryOptions } from "@/lib/query-options";
import { classNames } from "@/lib/utils";
import { RootState } from "@/store";
import { setUser } from "@/store/baseSlice";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useSelector } from "react-redux";

export const Route = createFileRoute("/_base")({
  beforeLoad: shouldBeLoggedIn as any,
  component: Base,
  loader: async ({ context }) => {
    const queryClient = context.queryClient;
    const meData = await queryClient.ensureQueryData(meQueryOptions());

    if (meData) {
      context.store.dispatch(setUser(meData));
    }
  },
});

function Base() {
  const params: any = Route.useParams();
  const topBarOpen = useSelector((state: RootState) => state.page.topBarOpen);
  const showSideBar = Boolean(params?.slug || "");

  return (
    <div className="main-wrapper">
      {showSideBar && <SideMenu />}
      <main className={"page-main bg-paper"}>
        <TopMenu
          className="fixed z-30 block w-full bg-background"
          showSideBar={showSideBar}
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
