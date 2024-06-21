import { createFileRoute, useNavigate } from "@tanstack/react-router";

import Box from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import Typography from "@/components/atoms/typography";
import { Separator } from "@/components/atoms/separator";
import { meQueryOptions } from "@/lib/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { shouldBeLoggedIn } from "@/lib/middleware";

export const Route = createFileRoute("/_split/store")({
  beforeLoad: shouldBeLoggedIn as any,
  component: Stores,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(meQueryOptions()),
});

function Stores() {
  const navigate = useNavigate();
  const meData: any = useSuspenseQuery(meQueryOptions());
  const stores = meData?.data?.stores || [];

  return (
    <Box preset={"stack-center"} className="w-full max-w-sm bg-background">
      <Box preset={"stack-center"} gap={0} className="w-full">
        <Box>
          <Typography as={"h3"} variant={"h3"} className="w-full">
            Hi {meData?.data?.firstName}.
          </Typography>
        </Box>

        <Typography as={"p"} variant={"caption"} className="w-full">
          {stores.length
            ? "Select store to access the dashboard."
            : "Let's start with creating a store."}
        </Typography>
      </Box>
      <Box preset={"stack-center"} className="w-full">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a store" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Connected Stores</SelectLabel>
              {stores.map((e: any) => (
                <SelectItem key={e.id} value={e.id}>
                  {e.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Box>
      <Separator className="mt-4" />
      <Box preset={"stack-center"} className="w-full" gap={2}>
        {Boolean(stores.length) && (
          <Typography as={"p"} variant={"sub"} className="w-full">
            Want to create a new store?
          </Typography>
        )}
        <Button variant={"outline"} className="w-full">
          Create Store
        </Button>
      </Box>

      <Separator className="mt-4" />

      <Box className="w-full" gap={2}>
        <Typography as={"p"} variant={"sub"} className="w-auto">
          Try different account?
        </Typography>
        <Button
          variant={"link"}
          className="p-0"
          onClick={() => navigate({ to: "/logout" })}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
