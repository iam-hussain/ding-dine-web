import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { SortTokensResult } from "@/types";

import TokenCard from "../molecules/token-card";

export interface TokenCollectionProps {
  variant: keyof SortTokensResult;
  noItemMessage?: string;
}

function TokenCollection({
  variant,
  noItemMessage,
  ...props
}: TokenCollectionProps) {
  const tokenData = useSelector((state: RootState) => state.base.token);

  const tokens = tokenData ? tokenData[variant] || [] : [];

  if (tokens.length === 0) {
    return (
      <p className="w-full grid-cols-12 py-8 m-auto text-sm text-center text-foreground/80 grow">
        {noItemMessage || "No tokens found"}
      </p>
    );
  }
  return (
    <div className="flex flex-wrap items-start justify-center gap-6 m-0 align-top">
      {tokens.map(({ items, ...token }) => (
        <TokenCard
          key={token.id}
          token={token}
          items={items}
          variant={variant}
          {...props}
        />
      ))}
    </div>
  );
}

export default TokenCollection;
