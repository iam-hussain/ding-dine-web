import { createFileRoute } from "@tanstack/react-router";

import Box from "@/components/atoms/box";
import Typography from "@/components/atoms/typography";
import { shouldBeLoggedOut } from "@/lib/middleware";

export const Route = createFileRoute("/logout")({
  beforeLoad: shouldBeLoggedOut,
  component: Logout,
});

function Logout() {
  return (
    <Box preset={"stack-center"} className="w-full max-w-sm bg-background">
      <Typography as={"h3"} variant={"h3"} className="w-full">
        Logging out...
      </Typography>
    </Box>
  );
}
