import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import Box from "@/components/atoms/box";
import Brand from "@/components/atoms/brand";
import { Separator } from "@/components/atoms/separator";

import BillingIllustration from "../assets/billing-illustration.svg";

export const Route = createFileRoute("/_split")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <Box className="min-h-screen bg-paper">
      <Box preset={"grid-split"}className="w-full gap-16 p-4 ">
        <Box className="justify-end hidden h-full max-w-sm m-auto mr-0 grow md:flex">
          <img src={BillingIllustration} alt="My SVG" className="" />
        </Box>
        <Box
          preset={"stack-center"}
          className="h-full md:items-start grow"
          gap={8}
        >
          <Box
            preset={"stack-center"}
            gap={2}
            className="w-full max-w-sm p-6 rounded-lg bg-background"
          >
            <Box
              preset={"stack-center"}
              gap={2}
              className="justify-between"
            >
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
