import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

import Icon from "@/components/atoms/icon";

// Define the variants using cva
const brandStyle = cva(
  "flex w-auto m-auto ml-0 gap-2 justify-center align-middle items-center select-none",
  {
    variants: {
      placement: {
        sideBySide: "flex-row",
        stacked: "flex-col",
      },
      iconSize: {
        small: "text-2xl",
        medium: "text-4xl",
        large: "text-4xl",
      },
      fontSize: {
        small: "text-2xl",
        medium: "text-4xl",
        large: "text-4xl",
      },
    },
    defaultVariants: {
      placement: "sideBySide",
      iconSize: "medium",
      fontSize: "medium",
    },
  }
);

type BrandSvgProps = VariantProps<typeof brandStyle> & {
  className?: string;
};

function Brand({ className, placement, iconSize, fontSize }: BrandSvgProps) {
  return (
    <div
      className={clsx(brandStyle({ placement, iconSize, fontSize }), className)}
    >
      <Icon
        name="FaConciergeBell"
        className={clsx(
          "text-primary font-thin",
          iconSize && brandStyle({ iconSize })
        )}
      />
      <h1
        className={clsx("font-display", fontSize && brandStyle({ fontSize }))}
      >
        DingDine
      </h1>
    </div>
  );
}

export default Brand;
