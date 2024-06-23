import Box from "@/components/atoms/box";
import { shouldBeLoggedIn } from "@/lib/middleware";
import { storeQueryOptions } from "@/lib/query-options";
import { setStore } from "@/store/baseSlice";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_store/store/$slug/")({
  beforeLoad: shouldBeLoggedIn as any,
  component: Store,
  loader: async ({ context }) => {
    const queryClient = context.queryClient;
    const storeData = await queryClient.ensureQueryData(storeQueryOptions());

    if (storeData) {
      context.store.dispatch(setStore(storeData));
    }
  },
});

function Store() {
  return (
    <Box preset={"row-responsive"} variant={"page"} data-name={"page"} gap={6}>
      <div>Hello </div>
    </Box>
  );
}
