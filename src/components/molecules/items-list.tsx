import { Separator } from "../atoms/separator";

function ItemsList({ items, label }: { items: any[]; label?: string }) {
  if (!items.length) {
    return <></>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {label && (
        <div className="flex flex-col justify-start pb-2 text-base uppercase">
          <span className="bg-background text-foreground/80">{label}</span>
          <Separator />
        </div>
      )}

      {items.map((item: any) => (
        <li
          key={item.id}
          className="flex items-center justify-center w-full gap-2 text-base font-medium align-middle text-inactive"
        >
          <div className="grow">
            <p className="text-left  text-foreground">{item.title}</p>
          </div>

          <div className="flex items-center justify-end gap-2 align-middle min-w-28">
            <span className="text-sm">
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
        </li>
      ))}
    </ul>
  );
}

export default ItemsList;
