import clsx from "clsx";

import Icon from "@/components/atoms/icon";

type BrandSvgProps = {
  className?: string;
};

function BrandStackSlogan({ className }: BrandSvgProps) {
  return (
    <div
      className={clsx(
        "flex flex-col w-auto m-auto ml-0 justify-center align-middle items-center select-none",
        className
      )}
    >
      <Icon
        name="FaConciergeBell"
        className="text-primary md:text-9xl text-7xl font-thin"
      />
      <div className="flex flex-col w-auto m-auto ml-0 gap-2 text-center">
        <h1 className="md:text-7xl text-5xl font-display text-foreground">
          DingDine
        </h1>
        <p className="text-foreground/50 uppercase font-medium text-xs md:text-base">
          Order with Ease, Dine with Pleasure
        </p>
      </div>
    </div>
  );
}

export default BrandStackSlogan;
