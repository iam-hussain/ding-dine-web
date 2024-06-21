import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_base/dashboard/")({
  component: () => <div>Hello /_base/dashboard/!</div>,
});
