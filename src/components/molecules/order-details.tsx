import { useSelector } from "react-redux";

import useOrderQuery from "@/hooks/useOrderQuery";
import { formatDateTime } from "@/lib/date-time";
import { RootState } from "@/store";
import { OrderAPIType } from "@/types";

import { Button } from "../atoms/button";
import Icon from "../atoms/icon";
import OrderStatusIcon from "./order-status-icon";
import OrderTypeIcon from "./order-type-icon";

function OrderDetails({ order }: { order: OrderAPIType }) {
  const featureFlags = useSelector(
    (state: RootState) => state.base.featureFlags
  );
  const { enableCustomerAdding, showUpdatedDate } = featureFlags;
  const { refresh } = useOrderQuery();

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 align-middle">
      <div className="flex items-center justify-between w-full gap-2 align-middle">
        <div className="flex items-center justify-center align-middle w-max">
          <div className="flex items-center justify-center gap-2 align-middle">
            <p className="text-foreground/80 w-max">
              Order:{" "}
              <span className="text-lg font-medium text-foreground">
                #{order?.shortId}
                {order?.table?.key ? ` / ${order?.table?.key}` : ""}
              </span>
            </p>
            <Button
              variant={"transparent"}
              className="p-0 hover:scale-110 active:scale-95"
              onClick={() => order?.shortId && refresh(order?.shortId)}
            >
              <Icon name="IoReloadCircleSharp" className="w-8 h-8" />
            </Button>
          </div>

          {enableCustomerAdding && order?.customerId && (
            <p className="font-medium">
              {order?.customerId ? order.customerId : "Unknown Name"}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end justify-center gap-2 align-middle">
          <div className="flex flex-wrap items-end justify-end gap-2 align-middle">
            <OrderStatusIcon
              value={order.status}
              classNames="text-foreground/90"
              withLabel={true}
            />
            {order?.type && (
              <OrderTypeIcon
                value={order.type}
                classNames="text-foreground/90"
                withLabel={true}
              />
            )}
          </div>
          <p className="w-full text-sm font-medium text-right text-foreground/90">
            <span className="text-xs text-foreground/80">
              {showUpdatedDate && order?.updatedAt
                ? "Updated @ "
                : "Created @ "}
            </span>{" "}
            {formatDateTime(
              showUpdatedDate && order?.updatedAt
                ? order?.updatedAt
                : order.createdAt
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
