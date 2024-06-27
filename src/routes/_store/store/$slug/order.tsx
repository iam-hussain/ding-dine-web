import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_store/store/$slug/order")({
  component: () => <div>Hello /_store/store/$slug/order!</div>,
});
