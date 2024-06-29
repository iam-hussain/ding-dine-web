import { createFileRoute } from "@tanstack/react-router";
import { ScrollArea } from "@/components/atoms/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs-primary";
import TokenCollection from "@/components/organisms/token-collection";
import { tokenQueryOptions } from "@/helpers/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import routeLoader from "@/helpers/route-loader";
import routeCommon from "@/helpers/route-common";
import Box from "@/components/atoms/box";
import Typography from "@/components/atoms/typography";

export const Route = createFileRoute("/store/$slug/_screen/kitchen")({
  ...routeCommon,
  loader: routeLoader(["me", "store", "tokens"]),
  component: Kitchen,
});

function Kitchen() {
  const { enableKitchenCategory } = useSelector(
    (state: RootState) => state.base.featureFlags
  );
  const { data: tokenData } = useSuspenseQuery(
    tokenQueryOptions(enableKitchenCategory)
  );
  return (
    <Box preset={"col-center"} className="w-full h-full p-6">
      <Tabs
        defaultValue="progress"
        className={"flex gap-4 flex-col w-full h-full"}
      >
        <TabsList className="flex justify-between w-full align-middle gap-x-h">
          <Typography variant={"h3"}>Kitchen Tokens Display</Typography>
          <div className="flex gap-4">
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="progress">InProgress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </div>
        </TabsList>
        <div className="flex p-4 py-8 grow h-5/6 bg-background">
          <ScrollArea className={"w-full h-full pr-2"}>
            <TabsContent value="scheduled">
              <TokenCollection
                variant="scheduled"
                tokens={tokenData["scheduled"] || []}
              />
            </TabsContent>
            <TabsContent value="progress">
              <TokenCollection
                variant="placed"
                tokens={tokenData["placed"] || []}
              />
            </TabsContent>
            <TabsContent value="completed">
              <TokenCollection
                variant="completed"
                tokens={tokenData["completed"] || []}
                noItemMessage={
                  "No items found (You will see only completed token in last 5 hours)"
                }
              />
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </Box>
  );
}
