import clsx from "clsx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";
import { cn } from "@/lib/utils";
import { ORDER_TYPE } from "@/types";

import Icon, { IconKey } from "../atoms/icon";
import { ORDER_TYPE_MAP } from "@/lib/constant";

function OrderTypeIcon({
  value,
  classNames,
  wrapperClassNames,
  withLabel,
}: {
  value: ORDER_TYPE;
  classNames?: string;
  wrapperClassNames?: string;
  withLabel?: boolean;
}) {
  // value === ORDER_TYPE.PICK_UP
  let iconName: IconKey = "BsFastForwardCircleFill";

  if (value === ORDER_TYPE.DINING) {
    iconName = "SiAirtable";
  }

  if (value === ORDER_TYPE.TAKE_AWAY) {
    iconName = "TfiPackage";
  }

  if (value === ORDER_TYPE.DELIVERY) {
    iconName = "RiEBike2Fill";
  }

  if (value === ORDER_TYPE.PLATFORM) {
    iconName = "MdBookOnline";
  }

  const IconComp = () => (
    <Icon
      name={iconName}
      className={cn(
        clsx(
          "h-6 w-6",
          {
            "text-cyan-600": value === ORDER_TYPE.PICK_UP,
            "text-lime-600": value === ORDER_TYPE.DINING,
            "text-rose-400": value === ORDER_TYPE.TAKE_AWAY,
            "text-pink-600": value === ORDER_TYPE.DELIVERY,
            "text-yellow-600": value === ORDER_TYPE.PLATFORM,
          },
          classNames
        )
      )}
    />
  );

  if (withLabel) {
    return (
      <div
        className={clsx(
          "w-fit min-h-[40px] flex justify-center align-middle items-center gap-2 uppercase border px-2 py-1 rounded-lg min-w-[145px] bg-background",
          wrapperClassNames
        )}
      >
        <IconComp />
        <p className="text-sm font-medium">{ORDER_TYPE_MAP[value]}</p>
      </div>
    );
  }

  return (
    <div className="w-fit">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconComp />
          </TooltipTrigger>
          <TooltipContent className="bg-bw-foreground text-bw">
            <p className="text-base font-medium">{ORDER_TYPE_MAP[value]}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default OrderTypeIcon;
