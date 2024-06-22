import { shouldBeLoggedIn } from "@/lib/middleware";
import { storeQueryOptions } from "@/lib/query-options";
import { setStore } from "@/store/baseSlice";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_base/store/$slug/")({
  beforeLoad: shouldBeLoggedIn as any,
  component: Store,
  loader: async ({ context, params }) => {
    const queryClient = context.queryClient;
    const storeData = await queryClient.ensureQueryData(
      storeQueryOptions(params.slug)
    );

    if (storeData) {
      context.store.dispatch(setStore(storeData));
    }
  },
});

function Store() {
  return <div>Hello </div>;
}
