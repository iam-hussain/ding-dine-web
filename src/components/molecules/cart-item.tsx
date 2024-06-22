import { ItemCreateSchemaType } from "@iam-hussain/qd-copilot";
import { Button } from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";

type CartItemProps = {
  index: number;
  item: ItemCreateSchemaType;
  onAddClick: (i: number) => void;
  onSubClick: (i: number) => void;
  onRemoveClick: (i: number) => void;
};

function CartItem({
  index,
  item,
  onAddClick,
  onSubClick,
  onRemoveClick,
}: CartItemProps) {
  return (
    <li className="flex items-center justify-center w-full gap-4 text-base font-medium align-middle rounded-md text-inactive">
      <div className="grow">
        <p className="text-left  text-foreground">{item.title}</p>

        <p className="text-sm">
          {"Amount: "}
          {Number(item.price).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
      </div>

      <div className="grid grid-cols-3 min-w-[90px]">
        <Button
          className="h-full p-2 rounded-none rounded-tl-lg rounded-bl-lg shadow-none"
          variant={"default"}
          disabled={item.quantity === 1}
          onClick={() => onSubClick(index)}
          type="button"
        >
          <Icon name="RiSubtractFill" />
        </Button>
        <span className="h-full py-2 text-center select-none bg-primary text-primary-foreground">
          {item.quantity}
        </span>
        <Button
          className="h-full p-2 rounded-none rounded-tr-lg rounded-br-lg shadow-none"
          variant={"default"}
          disabled={item.quantity > 10000}
          onClick={() => onAddClick(index)}
          type="button"
        >
          <Icon name="IoMdAdd" />
        </Button>
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
        onClick={() => onRemoveClick(index)}
        type="button"
      >
        <Icon name="RiDeleteBinLine" className="w-4 h-4 text-destructive" />
      </Button>
    </li>
  );
}

export default CartItem;
