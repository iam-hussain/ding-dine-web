import { createFileRoute } from "@tanstack/react-router";
import { ProductUpdateSchemaType } from "@iam-hussain/qd-copilot";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

import { Button } from "@/components/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";
import Icon from "@/components/atoms/icon";
import ProductForm from "@/components/forms/product";
import BaseTable from "@/components/molecules/base-table";
import { formatDateTime } from "@/lib/date-time";
import fetcher from "@/lib/fetcher";
import { RootState } from "@/store";
import routeCommon from "@/helpers/route-common";
import routeLoader from "@/helpers/route-loader";

const typeMap = {
  VEG: "Veg",
  NON_VEG: "Non-veg",
  VEGAN: "Vegan",
};

export const Route = createFileRoute("/store/$slug/_fluid/product")({
  ...routeCommon,
  loader: routeLoader(["me", "store", "products", "categories"]),
  component: Product,
});

function Product() {
  const categories = useSelector((state: RootState) => state.base.categories);
  const kitchenCategories = useSelector(
    (state: RootState) => state.base.kitchenCategories
  );
  const products = useSelector((state: RootState) => state.base.products);
  const [value, setValue] = useState<
    Partial<
      ProductUpdateSchemaType & {
        id: string;
      }
    >
  >({
    id: "",
  });

  const queryClient = useQueryClient();
  const [contentType, setContentType] = useState<"FORM" | "PROMPT">("FORM");
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: () => fetcher.delete(`/store/product/${value.id}`),
    onSuccess: async () => {
      setOpen(false);
      await queryClient.invalidateQueries({ queryKey: ["products"] });

      toast.success(
        `Product with ID ${value.id} has been successfully deleted. 🎉`
      );
    },
    onError: (err) => {
      setOpen(false);
      toast.error(
        `Unable to delete the product with ID ${value.id}. Please try again later. If the issue persists, contact support for assistance.`
      );
      console.error(err);
    },
  });

  const columns: ColumnDef<any>[] = [
    {
      size: 155,
      accessorKey: "id",
      header: () => <div className="text-left">ID</div>,
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          #{row.getValue("id")}
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => <div className="px-0">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "deck",
      header: () => <div className="text-left">Description</div>,
      cell: ({ row }) => (
        <div className="text-foreground/70">{row.getValue("deck")}</div>
      ),
    },
    {
      size: 120,
      accessorKey: "price",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {Number(row.getValue("price")).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </div>
      ),
    },
    {
      size: 140,
      accessorKey: "type",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {typeMap[row.getValue("type") as keyof typeof typeMap]}
        </div>
      ),
    },
    {
      size: 120,
      accessorKey: "outOfStock",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Available
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {row.getValue("outOfStock") ? "No" : "Yes"}
        </div>
      ),
    },
    {
      accessorKey: "categoryId",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0 text-left", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category ID
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {row.getValue("categoryId")}
        </div>
      ),
    },
    {
      accessorKey: "categoryName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0 text-left", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category Name
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {row.getValue("categoryName")}
        </div>
      ),
    },
    {
      accessorKey: "kitchenCategoryId",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0 text-left", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kitchen Group ID
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {row.getValue("kitchenCategoryId")}
        </div>
      ),
    },
    {
      accessorKey: "kitchenCategoryName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0 text-left", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kitchen Group
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {row.getValue("kitchenCategoryName")}
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0 text-left", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      sortingFn: (rowA, rowB) => {
        const dateA = new Date((rowA as unknown as string) || "");
        const dateB = new Date((rowB as unknown as string) || "");
        return dateA > dateB ? 1 : -1;
      },
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {formatDateTime(row.getValue("createdAt"))}
        </div>
      ),
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={clsx("px-0 text-left", {
            "font-bold": column.getIsSorted(),
          })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated At
          <CaretSortIcon className="w-4 h-4 ml-2" />
        </Button>
      ),
      sortingFn: (rowA, rowB) => {
        const dateA = new Date((rowA as unknown as string) || "");
        const dateB = new Date((rowB as unknown as string) || "");
        return dateA > dateB ? 1 : -1;
      },
      cell: ({ row }) => (
        <div className="text-left text-foreground/70">
          {formatDateTime(row.getValue("updatedAt"))}
        </div>
      ),
    },
    {
      size: 100,
      accessorKey: "action",
      header: () => <div className="pr-4 text-right">Action</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-2 align-middle">
          <DialogTrigger asChild>
            <Button
              variant={"ghost"}
              className="p-1 px-1 py-1"
              onClick={() => {
                setValue({
                  id: row.getValue("id"),
                  name: row.getValue("name") || "",
                  deck: row.getValue("deck") || "",
                  price: row.getValue("price") || 0,
                  type: row.getValue("type"),
                  categoryId: row.getValue("categoryId") || "",
                });
                setContentType("FORM");
              }}
            >
              <Icon name="MdOutlineEdit" className="w-5 h-5" />
            </Button>
          </DialogTrigger>{" "}
          <DialogTrigger asChild>
            <Button
              variant={"ghost"}
              className="p-1"
              onClick={() => {
                setValue({
                  id: row.getValue("id"),
                  name: row.getValue("name") || "",
                  deck: row.getValue("deck") || "",
                  price: row.getValue("price") || 0,
                  type: row.getValue("type"),
                  categoryId: row.getValue("categoryId") || "",
                });
                setContentType("PROMPT");
              }}
            >
              <Icon
                name="MdDeleteOutline"
                className="w-5 h-5 text-destructive"
              />
            </Button>
          </DialogTrigger>
        </div>
      ),
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex flex-col items-start justify-start w-full h-full p-6 m-auto align-top grow max-w-screen-3xl">
        <section className="flex justify-between w-full h-auto mb-4">
          <h1 className="text-xl font-semibold md:text-2xl">Manage Product</h1>
          <DialogTrigger asChild>
            <Button
              className="flex gap-2 md:mr-10"
              onClick={() => {
                setValue({
                  id: "",
                });
                setContentType("FORM");
              }}
            >
              <Icon name="IoMdAdd" className="w-5 h-5" />
              Create
            </Button>
          </DialogTrigger>
        </section>
        <section className="flex justify-start h-full max-w-full gap-8 w-3xl md:flex-row">
          <BaseTable columns={columns} data={products} isLoading={false} />
        </section>
        <DialogContent className="sm:max-w-[425px]">
          {contentType === "FORM" ? (
            <>
              <DialogHeader>
                <DialogTitle>
                  {value.id ? "Edit" : "Create"} product
                </DialogTitle>
                <DialogDescription>
                  {value.id
                    ? `You are editing the product with id: ${value.id}.`
                    : "You can create a product here."}
                </DialogDescription>
              </DialogHeader>
              <ProductForm
                defaultValues={value}
                onSuccess={() => {
                  if (!value.id) {
                    setOpen(false);
                  }
                }}
                categories={categories}
                kitchenCategories={kitchenCategories}
              />
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Delete category</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete the product with ID{" "}
                  <strong className="text-destructive">{value.id}</strong> and
                  the name{" "}
                  <strong className="text-destructive">{value.name}</strong>?
                  This action cannot be undone.
                </DialogDescription>
                <div className="flex justify-between gap-4 pt-4 text-right">
                  <Button
                    variant={"outline"}
                    className="w-full md:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant={"destructive"}
                    className="w-full md:w-auto"
                    disabled={mutation.isPending}
                    onClick={() => mutation.mutate()}
                  >
                    Delete
                  </Button>
                </div>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
}
