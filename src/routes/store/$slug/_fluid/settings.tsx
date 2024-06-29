import { FeatureFlagForm } from "@/components/forms/feature-flag";
import { createFileRoute } from "@tanstack/react-router";
import Box from "@/components/atoms/box";
import Typography from "@/components/atoms/typography";
import routeCommon from "@/helpers/route-common";
import routeLoader from "@/helpers/route-loader";

export const Route = createFileRoute("/store/$slug/_fluid/settings")({
  ...routeCommon,
  loader: routeLoader(["me", "store"]),
  component: Settings,
});

function Settings() {
  return (
    <Box preset={"col-start"} variant={"container"} data-name={"page"} gap={6}>
      <Typography variant={"caption"}>Store Settings</Typography>
      <Box preset={"col-start"} className="p-4 bg-background" gap={2}>
        <FeatureFlagForm />
        <div></div>
      </Box>
    </Box>
  );
}
