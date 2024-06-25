import Box from "@/components/atoms/box";
import Icon, { IconKey } from "@/components/atoms/icon";
import { CustomLink } from "@/components/atoms/link";
import Typography from "@/components/atoms/typography";
import AvatarCircle from "@/components/molecules/avatar-circle";
import { RootState } from "@/store";
import { createFileRoute } from "@tanstack/react-router";
import { useSelector } from "react-redux";

export const Route = createFileRoute("/_store/store/$slug/")({
  component: Store,
});

type Menu = {
  icon: IconKey;
  label: string;
  active?: boolean;
  link: any;
  description: string;
};

const appMenus: Menu[] = [
  {
    icon: "LuPrinter",
    label: "Billing System",
    link: "/store/pos",
    description:
      "Manage customer billing efficiently with our integrated POS system.",
  },
  {
    icon: "RiBillLine",
    label: "Order Management",
    link: "/store/orders",
    description: "Track and manage all customer orders in one place.",
  },
  {
    icon: "MdOutlineSoupKitchen",
    label: "Kitchen Display",
    link: "/store/kitchen",
    description: "Display orders to kitchen staff for streamlined preparation.",
  },
  {
    icon: "PiShoppingCartSimpleBold",
    label: "Customer Display",
    link: "/store/display",
    description: "Show order status and updates to customers in real-time.",
  },
];

function Store() {
  const store = useSelector((state: RootState) => state.base.store);

  return (
    <Box preset={"row-responsive"} variant={"page"} data-name={"page"} gap={6}>
      <Box preset={"stack-responsive"} data-name={"avatar"}>
        <AvatarCircle
          name={store.slug}
          image={store?.image}
          className="w-16 h-16 md:h-60 md:w-60"
          avatarClassName="md:text-6xl"
        />
        <Box preset={"stack-center"} className="w-auto" gap={0}>
          <Typography variant={"h2"} className="text-md md:text-4xl">
            {store.name}
          </Typography>
          <Typography variant={"sub"} className="text-base md:text-2xl">
            {store.slug}
          </Typography>
        </Box>
      </Box>
      <Box preset={"stack-start"} className="grow" gap={4}>
        <Typography variant={"caption"}>Stores</Typography>
        <Box preset={"stack-center"} gap={4}>
          {appMenus.map((item, index) => (
            <Box
              key={`item_${index}`}
              preset={"row-space-between"}
              className="h-full p-4 bg-background min-w-[150px]"
              gap={4}
            >
              <Icon name={item.icon} className="w-10 h-10" />
              <Box preset={"stack-start"} gap={0} className="grow">
                <CustomLink variant={"link"} className="h-auto p-0">
                  <Typography variant={"h6"}>{item.label}</Typography>
                </CustomLink>
                <Typography variant={"sub"}>{item.description}</Typography>
              </Box>
              <CustomLink
                variant={"outline"}
                iconName="BiShow"
                to={item.link}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
