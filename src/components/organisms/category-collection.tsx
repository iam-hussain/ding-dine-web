import clsx from "clsx";

import { Container } from "@/components/atoms/container";
import { ScrollArea } from "@/components/atoms/scroll-area";
import CategoryItem from "@/components/molecules/category-item";

export default function CategoryCollection({
  className,
  categories,
  onClick,
  selected,
  productCount,
}: {
  className?: string;
  categories: { name: string; id: string; productsConnected: number }[];
  onClick: (e: any) => void;
  selected: string;
  productCount: number;
}) {
  return (
    <div className={clsx("flex w-auto h-auto gap-2 flex-col", className)}>
      {/* <h1 className="text-xl font-medium">Categories</h1> */}
      <ScrollArea
        className={clsx(
          "w-auto min-w-full h-auto whitespace-nowrap transition-all duration-300"
        )}
      >
        <Container className="grid w-full grid-flow-row gap-4 px-4 auto-rows-max text-bg-foreground">
          <CategoryItem
            name="All Menu"
            active={!selected}
            onClick={() => onClick({})}
            numberOfItems={productCount}
          />
          {categories.map((category, index) => (
            <CategoryItem
              key={`cat_${index}`}
              {...category}
              onClick={() => onClick(category)}
              active={selected === category.id}
              numberOfItems={category.productsConnected}
            />
          ))}{" "}
          {categories.map((category, index) => (
            <CategoryItem
              key={`cat_${index}`}
              {...category}
              onClick={() => onClick(category)}
              active={selected === category.id}
              numberOfItems={category.productsConnected}
            />
          ))}{" "}
          {categories.map((category, index) => (
            <CategoryItem
              key={`cat_${index}`}
              {...category}
              onClick={() => onClick(category)}
              active={selected === category.id}
              numberOfItems={category.productsConnected}
            />
          ))}{" "}
          {categories.map((category, index) => (
            <CategoryItem
              key={`cat_${index}`}
              {...category}
              onClick={() => onClick(category)}
              active={selected === category.id}
              numberOfItems={category.productsConnected}
            />
          ))}
        </Container>
        {/* <ScrollBar orientation="horizontal" /> */}
      </ScrollArea>
    </div>
  );
}
