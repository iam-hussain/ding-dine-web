import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

import Icon from "@/components/atoms/icon";
import { classNames } from "@/lib/utils";

// Define the variants using cva
const brandStyle = cva(
  "flex w-auto gap-1 justify-center align-middle items-center select-none",
  {
    variants: {
      placement: {
        sideBySide: "flex-row",
        stacked: "flex-col",
      },
      iconSize: {
        none: "",
        small: "h-6 w-6",
        medium: "h-8 w-8",
        large: "h-10 w-10",
      },
      fontSize: {
        small: "text-xl",
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
      <div className="flex items-center justify-center p-0 m-0 align-middle rounded-lg">
        <Icon
          name="FaConciergeBell"
          className={classNames(
            "text-primary",
            iconSize && brandStyle({ iconSize })
          )}
        />
      </div>
      <h1
        className={clsx("font-display", fontSize && brandStyle({ fontSize }))}
      >
        DingDine
      </h1>
    </div>
  );
}

export default Brand;
