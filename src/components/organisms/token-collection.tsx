import { SortTokensResult, TokenType } from "@/types";

import TokenCard from "../molecules/token-card";

export interface TokenCollectionProps {
  variant: keyof SortTokensResult;
  noItemMessage?: string;
  tokens: TokenType[];
}

function TokenCollection({
  variant,
  noItemMessage,
  tokens = [],
  ...props
}: TokenCollectionProps) {
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
