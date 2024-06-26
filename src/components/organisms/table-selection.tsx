import { OrderUpsertSchemaType } from "@iam-hussain/qd-copilot";
import clsx from "clsx";
import React from "react";
import { useController, useFormContext, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";

import { Button } from "@/components/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";
import Icon from "@/components/atoms/icon";
import { ToggleGroup, ToggleGroupItem } from "@/components/atoms/toggle-group";
import { RootState } from "@/store";

function TableSelection() {
  const [openTable, setOpenTable] = React.useState(false);
  const { enableTables } = useSelector(
    (state: RootState) => state.base.featureFlags
  );
  const { control } = useFormContext<OrderUpsertSchemaType>();
  const { tables } = useSelector((state: RootState) => state.base.settings);

  const table = useWatch({
    control,
    name: "table",
    defaultValue: undefined,
  });

  const {
    field: { onChange: onTableChange },
  } = useController({
    control,
    name: "table",
  });

  if (!enableTables && !table?.key) {
    return <></>;
  }

  return (
    <Dialog open={openTable} onOpenChange={setOpenTable}>
      <DialogTrigger asChild>
        <Button
          variant={table?.key ? "accent" : "outline"}
          className={clsx("flex justify-center gap-2 font-normal text-lg")}
        >
          {table?.name ? (
            <p className="font-bold text-base">{table?.name}</p>
          ) : (
            <Icon name={"MdTableRestaurant"} className="h-5 w-5" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Table</DialogTitle>
        </DialogHeader>
        <div className="flex gap-4 py-4 justify-center">
          <ToggleGroup
            type="single"
            variant="outline"
            className="flex items-center gap-4 justify-center flex-wrap"
            value={table?.key || ""}
          >
            <ToggleGroupItem
              value={""}
              aria-label={"None"}
              className="text-2xl px-4 py-8"
              onClick={() => {
                onTableChange({});
                setOpenTable(false);
              }}
            >
              <div>--</div>
            </ToggleGroupItem>
            {tables.map((e, i) => (
              <ToggleGroupItem
                value={e.key}
                aria-label={e.name}
                key={`table_${i}`}
                className="text-2xl px-4 py-8"
                onClick={() => {
                  onTableChange(e);
                  setOpenTable(false);
                }}
              >
                <div>{e.name}</div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TableSelection;
