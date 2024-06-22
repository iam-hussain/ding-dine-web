import { cva, VariantProps } from "class-variance-authority";

import Icon from "@/components/atoms/icon";
import { classNames } from "@/lib/utils";

// Define the variants using cva
const brandStyle = cva("", {
  variants: {
    placement: {
      sideBySide: "flex-row",
      stacked: "flex-col",
      none: "",
    },
    iconSize: {
      none: "",
      small: "h-6 w-6",
      medium: "h-12 w-12",
      large: "h-10 w-10",
    },
    fontSize: {
      none: "",
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
});

type BrandSvgProps = VariantProps<typeof brandStyle> & {
  className?: string;
};

function Brand({ className, placement, iconSize, fontSize }: BrandSvgProps) {
  return (
    <div
      className={classNames(
        "flex gap-1 justify-center align-middle items-center select-none",
        brandStyle({ placement, iconSize: "none", fontSize: "none" }),
        className
      )}
    >
      <div className="flex items-center justify-center p-0 m-0 align-middle rounded-lg">
        <Icon
          name="FaConciergeBell"
          className={classNames(
            "text-primary",
            brandStyle({ iconSize, fontSize: "none", placement: "none" })
          )}
        />
      </div>
      <h1
        className={classNames(
          "font-display",
          brandStyle({ fontSize, iconSize: "none", placement: "none" })
        )}
      >
        DingDine
      </h1>
    </div>
  );
}

export default Brand;
