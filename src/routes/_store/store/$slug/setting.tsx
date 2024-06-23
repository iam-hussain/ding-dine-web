import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_store/store/$slug/setting")({
  component: () => <div>Hello /_store/store/$slug/setting!</div>,
});
