import "./styles/global.scss";

import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import Loader from "@/components/molecules/loader";
import { queryClient } from "@/providers/query-provider";
import { store } from "@/store";
import NotFound from "@/components/molecules/not-found";
import Error from "@/components/molecules/error";

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <Loader minFullScreen={true} />,
  defaultErrorComponent: ({ error }) => (
    <Error error={error} minFullScreen={true} />
  ),
  defaultNotFoundComponent: () => <NotFound />,
  context: {
    queryClient,
    store,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
