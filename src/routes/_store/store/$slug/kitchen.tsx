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
import { setTokens } from "@/store/baseSlice";

export const Route = createFileRoute("/_store/store/$slug/kitchen")({
  component: Kitchen,
  loader: async ({ context }) => {
    const { enableKitchenCategory = false } =
      context.store.getState().base.featureFlags;
    const queryClient = context.queryClient;
    const tokens = await queryClient.ensureQueryData(
      tokenQueryOptions(enableKitchenCategory)
    );

    if (tokens) {
      context.store.dispatch(
        setTokens({
          placed: tokens?.placed || [],
          scheduled: tokens?.scheduled || [],
          completed: tokens?.completed || [],
        })
      );
    }
  },
});

function Kitchen() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6 py-4 align-middle bg-paper">
      <Tabs
        defaultValue="progress"
        className={"flex gap-4 flex-col w-full h-full"}
      >
        <TabsList className="flex justify-between w-full align-middle gap-x-h ">
          <h1 className="text-2xl font-semibold text-foreground">
            Kitchen Tokens Display
          </h1>
          <div className="flex gap-4">
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="progress">InProgress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </div>
        </TabsList>
        <div className="flex p-6 bg-background grow h-5/6 ">
          <ScrollArea className={"w-full h-full pr-4"}>
            <TabsContent value="scheduled">
              <TokenCollection variant="scheduled" />
            </TabsContent>
            <TabsContent value="progress">
              <TokenCollection variant="placed" />
            </TabsContent>
            <TabsContent value="completed">
              <TokenCollection
                variant="completed"
                noItemMessage={
                  "No items found (You will see only completed token in last 5 hours)"
                }
              />
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </div>
  );
}
