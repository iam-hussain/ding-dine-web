import TopMenu from "@/components/organisms/top-menu";
import UserMenu from "@/components/organisms/user-menu";
import { shouldBeLoggedIn } from "@/lib/middleware";
import { classNames } from "@/lib/utils";
import { RootState } from "@/store";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import routeCommon from "@/helpers/route-common";
import routeLoader from "@/helpers/route-loader";

export const Route = createFileRoute("/_user")({
  ...routeCommon,
  beforeLoad: shouldBeLoggedIn as any,
  loader: routeLoader(["me"]),
  component: UserLayout,
});

function UserLayout() {
  const topBarOpen = useSelector((state: RootState) => state.page.topBarOpen);

  return (
    <div className="main-wrapper">
      <main className={"page-main bg-paper"}>
        <TopMenu
          className="fixed z-30 block w-full bg-background"
          showSideBar={false}
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
