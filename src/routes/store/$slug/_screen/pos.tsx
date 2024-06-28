import routeMiddleware from "@/helpers/route-middleware";
import { createFileRoute } from "@tanstack/react-router";
import POSForm from "@/components/organisms/point-of-sale/pos-form";
import CategoriesProvider from "@/components/templates/categories-provider";
import ProductsProvider from "@/components/templates/products-provider";

export const Route = createFileRoute("/store/$slug/_screen/pos")({
  ...routeMiddleware.productCategory,
  component: Pos,
});

function Pos() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6 py-4 align-middle bg-paper">
      <CategoriesProvider>
        <ProductsProvider>
          <POSForm />
        </ProductsProvider>
      </CategoriesProvider>
    </div>
  );
}
