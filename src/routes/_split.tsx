import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import Box from "@/components/atoms/box";
import Brand from "@/components/atoms/brand";
import { Separator } from "@/components/atoms/separator";

import Cooking from "@/assets/undraw_cooking.svg";
import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";

export const Route = createFileRoute("/_split")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <Box className="min-h-screen bg-paper">
      <div className="absolute top-5 right-5">
        <ThemeModeToggle />
      </div>
      <Box preset={"grid-split"} gap={10} className="w-full max-w-6xl p-4">
        <Box className="hidden md:flex">
          <img
            src={Cooking}
            alt="cooking"
            className="w-auto m-auto md:max-w-sm"
          />
        </Box>
        <Box preset={"stack-center"} className="h-full grow" gap={8}>
          <Box
            preset={"stack-center"}
            gap={2}
            className="w-full max-w-sm p-6 rounded-lg bg-background"
          >
            <Box preset={"stack-center"} gap={2} className="justify-between">
              <Link to={"/"}>
                <Brand iconSize={"medium"} fontSize={"medium"} />
              </Link>
              <Separator className="my-2 mb-6" />
            </Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
