import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

import { cn } from "@/lib/utils";

const typographyStyles = cva("", {
  variants: {
    variant: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-2xl font-semibold tracking-tight",
      sub: "text-md font-sans",
      body: "leading-7",
      caption: "text-sm font-light",
      overline: "text-xs uppercase tracking-wide",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      link: "font-medium text-primary underline underline-offset-4",
      listItem: "my-6 ml-6 list-disc",
      table: "my-6 w-full overflow-y-auto",
      tableCell: "border px-4 py-2 text-left",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    // weight: {
    //   light: "font-light",
    //   normal: "font-normal",
    //   medium: "font-medium",
    //   semibold: "font-semibold",
    //   bold: "font-bold",
    // },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
      success: "text-success",
      default: "text-default",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
    // weight: "normal",
    color: "default",
  },
});

interface TypographyProps extends VariantProps<typeof typographyStyles> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  className,
  children,
  ...props
}) => {
  return (
    <Component className={cn(clsx(typographyStyles(props), className))}>
      {children}
    </Component>
  );
};

export default Typography;
