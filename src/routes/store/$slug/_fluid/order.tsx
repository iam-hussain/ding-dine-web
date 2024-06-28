import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/store/$slug/_fluid/order")({
  component: () => <div>Hello /_store/store/$slug/order!</div>,
});
