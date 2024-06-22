import { ItemCreateSchemaType } from "@iam-hussain/qd-copilot";
import { Button } from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";

type DraftItemsProps = {
  label?: string;
  items: ItemCreateSchemaType[];
};

function DraftItems({ label, items }: DraftItemsProps) {
  return (
    <ul className="flex flex-col gap-0 pt-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            {label || "Drafted"}
          </span>
        </div>
      </div>

      {items.map((item: any) => (
        <li
          key={item.id}
          className="flex items-center justify-center w-full gap-2 text-sm font-medium align-middle text-inactive"
        >
          <div className="grow">
            <p className="text-left  text-foreground">{item.title}</p>
          </div>

          <div className="flex items-center justify-end gap-2 align-middle min-w-28">
            <span className="text-xs">
              {Number(item.price).toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </span>
            <span>x</span>
            <span className="text-center select-none text-foreground">
              {item.quantity}
            </span>
          </div>
          <span className="flex justify-end min-w-20 text-foreground">
            {Number(item.price * item.quantity).toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </span>

          <Button
            variant={"ghost"}
            className="p-1"
            onClick={() => {}}
            type="button"
          >
            <Icon name="RiDeleteBinLine" className="w-4 h-4 text-destructive" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default DraftItems;
