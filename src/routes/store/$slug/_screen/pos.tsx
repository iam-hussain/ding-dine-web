import { createFileRoute } from "@tanstack/react-router";
import POSForm from "@/components/organisms/point-of-sale/pos-form";
import routeCommon from "@/helpers/route-common";
import routeLoader from "@/helpers/route-loader";

export const Route = createFileRoute("/store/$slug/_screen/pos")({
  ...routeCommon,
  loader: routeLoader(["me", "store", "products", "categories"]),
  component: Pos,
});

function Pos() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6 py-4 align-middle bg-paper">
      <POSForm />
    </div>
  );
}
