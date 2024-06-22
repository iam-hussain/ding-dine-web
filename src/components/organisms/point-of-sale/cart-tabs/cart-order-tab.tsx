import { OrderUpsertSchemaType } from "@iam-hussain/qd-copilot";
import clsx from "clsx";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

import { ScrollArea } from "@/components/atoms/scroll-area";
import { Separator } from "@/components/atoms/separator";
import ButtonToolTip from "@/components/molecules/button-tooltip";
import CartItem from "@/components/molecules/cart-item";
import OrderTypeSelect from "@/components/molecules/order-type-select";
import CartSummary from "@/components/organisms/cart-summary";
import TableSelection from "@/components/organisms/table-selection";
import { RootState } from "@/store";

import DeleteOrder from "../actions/delete-order";
import DraftOrder from "../actions/draft-order";
import KitchenDispatch from "../actions/kitchen-dispatch";
import ScheduleDispatch from "../actions/schedule-dispatch";

function CartOrderTab({ className }: { className?: string }) {
  const { watch } = useFormContext<OrderUpsertSchemaType>();
  const { enableCustomerAdding } = useSelector(
    (state: RootState) => state.base.featureFlags
  );

  const items = watch("items", []);
  const { remove, update } = useFieldArray({
    name: "items",
  });

  const handleQuantityClick = (type: "ADD" | "SUB" = "ADD", index: number) => {
    if (type === "SUB" && items[index].quantity === 0) {
      return;
    }
    update(index, {
      ...items[index],
      quantity:
        type == "ADD" ? items[index].quantity + 1 : items[index].quantity - 1,
    });
  };

  return (
    <div className={clsx("flex flex-col h-full gap-1", className)}>
      <div className="flex justify-between gap-4 px-4">
        <OrderTypeSelect />
        <div className="flex items-center justify-between gap-2 align-middle">
          <TableSelection />
          {enableCustomerAdding && (
            <ButtonToolTip
              label="Link Customer"
              icon="IoPersonAddSharp"
              variant="outline"
            />
          )}
        </div>
      </div>
      <Separator className="my-4" />
      <ScrollArea className="w-full flex justify-end grow bg-background px-4 h-[300px] cart">
        <ul className="flex flex-col gap-2">
          {items.length === 0 ? (
            <li className="w-full py-6 text-sm text-center text-foreground/80">
              No items found
            </li>
          ) : (
            <></>
          )}
          {items.map((item, index) => (
            <CartItem
              item={item}
              index={index}
              key={`cart_item_${index}`}
              onAddClick={(index) => handleQuantityClick("ADD", index)}
              onSubClick={(index) => handleQuantityClick("SUB", index)}
              onRemoveClick={(index) => remove(index)}
            />
          ))}
        </ul>
        {/* {drafted.length && <DraftItems items={drafted} />} */}
      </ScrollArea>
      <Separator className="my-2 mt-4" />
      <div className="flex flex-col items-center justify-center h-auto gap-4 px-6 text-base align-middle select-none bg-background">
        <CartSummary items={items as any} />
        <div className="flex w-full gap-2">
          <DeleteOrder />
          <DraftOrder />
          <ScheduleDispatch />
          <KitchenDispatch />
          {/* <Button className="w-full col-span-2" type="submit">
            Bill Out
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default CartOrderTab;
