import { FeatureFlagForm } from "@/components/forms/feature-flag";
import { createFileRoute } from "@tanstack/react-router";
import Box from "@/components/atoms/box";
import Typography from "@/components/atoms/typography";

export const Route = createFileRoute("/_store/store/$slug/settings")({
  component: Settings,
});

function Settings() {
  return (
    <Box preset={"col-start"} variant={"page"} data-name={"page"} gap={6}>
      <Typography variant={"caption"}>Store Settings</Typography>
      <Box preset={"col-start"} className="p-4 bg-background" gap={2}>
        <FeatureFlagForm />
        <div></div>
      </Box>
    </Box>
  );
}
