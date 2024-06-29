import { SortTokensResult, TokenType } from "@/types";

import TokenCard from "../molecules/token-card";
import Box from "../atoms/box";

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
      <Box preset={"row-center"} gap={6}>
        {noItemMessage || "No tokens found"}
      </Box>
    );
  }
  return (
    <Box
      preset={"row-start"}
      className="flex-wrap items-start justify-center"
      gap={6}
    >
      {tokens.map(({ items, ...token }) => (
        <TokenCard
          key={token.id}
          token={token}
          items={items}
          variant={variant}
          {...props}
        />
      ))}
    </Box>
  );
}

export default TokenCollection;
