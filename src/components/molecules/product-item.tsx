import clsx from "clsx";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { AspectRatio } from "@/components/atoms/aspect-ratio";
import { RootState } from "@/store";
import { ProductAPIType } from "@/types";

const animateVariation = {
  initial: { scale: 1 },
  hover: { scale: 1.03 },
  pressed: { scale: 0.95 },
};

export interface ProductCardProps {
  product: ProductAPIType;
  onClick: (e: any, p: ProductAPIType) => void;
}

function ProductItem({ product, onClick, ...props }: ProductCardProps) {
  const featureFlags = useSelector(
    (state: RootState) => state.base.featureFlags
  );

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="pressed"
      variants={animateVariation}
      className={clsx(
        "flex flex-col h-full w-full align-middle items-center justify-start text-start rounded-lg cursor-pointer select-none gap-2 transition duration-300 active:scale-95",
        {
          "bg-paper p-4 hover:bg-accent": !featureFlags.showProductsImage,
          // "bg-paper p-4 hover:scale-": featureFlags.showProductsImage,
        }
      )}
      onClick={(e) => onClick(e, product)}
      {...props}
    >
      {featureFlags.showProductsImage && product?.image.primary?.value && (
        <div className="w-full border-2 rounded-lg border-accent">
          <AspectRatio ratio={5 / 3} className="h-full">
            <img
              src={product?.image.primary?.value}
              alt={product?.image.primary?.value}
              className="object-cover rounded-md"
            />
          </AspectRatio>
        </div>
      )}
      {featureFlags.showProductsImage && !product?.image.primary?.value && (
        <div className="w-5/12 border-2 rounded-lg border-accent">
          <AspectRatio ratio={4 / 3} className="h-full">
            <div className="flex items-center justify-center object-cover w-full h-full text-2xl font-bold align-middle rounded-md bg-accent">
              H
            </div>
          </AspectRatio>
        </div>
      )}

      <div
        className={clsx("flex-col w-full", {
          // "text-left w-7/12": featureFlags.showProductsImage,
          // "text-center w-full": !featureFlags.showProductsImage,
        })}
      >
        <h5
          className={clsx("text-base text-foreground", {
            "break-words text-one-line": featureFlags.showProductsImage,
          })}
        >
          {product?.name || ""}
        </h5>
        {/* {featureFlags.showProductsImage && product?.deck && (
          <p className="overflow-hidden text-sm truncate">{product?.deck}</p>
        )} */}
        <p className="text-xl font-semibold text-foreground">
          {product?.formattedPrice}
        </p>
      </div>
    </motion.div>
  );
}

export default ProductItem;
