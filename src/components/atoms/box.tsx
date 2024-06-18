import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

import { cn } from "@/lib/utils";

const boxStyles = cva("", {
  variants: {
    preset: {
      "row-center": "flex flex-row justify-center items-center",
      "row-start": "flex flex-row justify-start items-center",
      "row-space-between": "flex flex-row justify-between items-center",
      "stack-center": "flex flex-col justify-center items-center",
      "stack-top-center": "flex flex-col justify-start items-center",
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
  },
  defaultVariants: {
    preset: "row-center",
    gap: 4,
  },
});

interface BoxProps extends VariantProps<typeof boxStyles> {
  className?: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, className, preset, ...props }) => {
  return (
    <div data-name={"box"} className={cn(clsx(boxStyles({ preset, ...props }), className))}>
      {children}
    </div>
  );
};

export default Box;
