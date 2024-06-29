import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";

import { classNames } from "@/lib/utils";

const boxStyles = cva("w-full", {
  variants: {
    preset: {
      none: "",
      "row-center": "flex flex-row justify-center items-center",
      "row-start": "flex flex-row justify-start items-center",
      "row-stretch": "flex flex-row justify-start items-stretch",
      "row-responsive":
        "flex md:flex-row flex-col justify-start items-center md:items-start",
      "row-space-between": "flex flex-row justify-between items-center",
      "col-center": "flex flex-col justify-center items-center",
      "col-start": "flex flex-col justify-start items-start",
      "col-responsive":
        "flex md:flex-col flex-row justify-start items-center w-auto",
      "col-top-center": "flex flex-col justify-start items-center",
      "grid-center": "grid justify-center items-center",
      "grid-top-center": "grid justify-start items-center",
      "grid-cols-12": "grid grid-cols-12",
      "grid-split": "grid md:grid-cols-2 grid-cols-1",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
    },
    variant: {
      none: "",
      container: "max-w-6xl w-full h-full p-6 md:p-8 mx-auto",
      "page-screen": "h-full max-h-screen w-full",
      "page-fluid": "h-auto min-h-svh w-full",
      "page-content": "h-auto max-h-screen w-full",
      "page-fill": "h-full min-h-svh w-full",
    },
  },
  defaultVariants: {
    preset: "row-center",
    gap: 4,
    variant: "none",
  },
});

interface BoxProps extends VariantProps<typeof boxStyles> {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
  as: Component = "div",
  children,
  className,
  preset,
  gap,
  variant,
  ...props
}) => {
  return (
    <Component
      data-name={"box"}
      className={classNames(boxStyles({ preset, variant, gap }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Box;
