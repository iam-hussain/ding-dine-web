function CartSummaryItem({ name, price }: { name: string; price: number }) {
  return (
    <div className="flex items-center justify-between w-full gap-2 align-middle">
      <span>{name}</span>
      <span>
        {Number(price).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </span>
    </div>
  );
}

export default CartSummaryItem;
