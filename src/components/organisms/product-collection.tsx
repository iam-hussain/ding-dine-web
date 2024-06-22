import clsx from "clsx";

import { Container } from "@/components/atoms/container";
import ProductItem from "@/components/molecules/product-item";
import { ProductAPIType } from "@/types";

function ProductCollection({
  className,
  products,
  onClick,
}: {
  className?: string;
  products: ProductAPIType[];
  onClick: (e: any, p: ProductAPIType) => void;
}) {
  return (
    <div className={clsx("flex w-full h-auto gap-2 flex-col grow", className)}>
      {/* <h1 className="text-xl font-medium">Products</h1> */}

      <Container className="grid w-full grid-cols-1 gap-4 px-4 m-auto md:grid-cols-3 2xl:grid-cols-4 place-items-stretch place-content-around">
        {products.map((product, index) => (
          <ProductItem product={product} key={index} onClick={onClick} />
        ))}
      </Container>
    </div>
  );
}

export default ProductCollection;
