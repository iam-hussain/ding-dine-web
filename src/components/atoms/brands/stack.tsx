import clsx from "clsx";

import Icon from "@/components/atoms/icon";

type BrandSvgProps = {
  className?: string;
};

function BrandStack({ className }: BrandSvgProps) {
  return (
    <div
      className={clsx(
        "flex flex-col w-auto m-auto ml-0 gap-2 justify-center align-middle items-center select-none",
        className
      )}
    >
      <Icon
        name="FaConciergeBell"
        className="font-thin text-primary md:text-9xl text-7xl"
      />
      <h1 className="text-5xl md:text-7xl font-display">DingDine</h1>
    </div>
  );
}

export default BrandStack;
