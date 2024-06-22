import clsx from "clsx";

import { Button, ButtonProps } from "@/components/atoms/button";
import Icon, { IconKey } from "@/components/atoms/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";

type ButtonToolTip = {
  label: string;
  icon: IconKey;
  swapText?: string;
} & ButtonProps;

function ButtonToolTip({
  label,
  icon,
  swapText,
  ...buttonProps
}: ButtonToolTip) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"default"}
            className={clsx("flex justify-center gap-2 font-normal text-lg")}
            {...buttonProps}
          >
            {swapText ? (
              <p className="text-base font-bold">{swapText}</p>
            ) : (
              <Icon name={icon} className="w-5 h-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-bw-foreground text-bw">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ButtonToolTip;
