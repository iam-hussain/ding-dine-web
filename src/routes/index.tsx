import Box from "@/components/atoms/box";
import Brand from "@/components/atoms/brand";
import { Button } from "@/components/atoms/button";
import Typography from "@/components/atoms/typography";
import { createFileRoute, Link } from "@tanstack/react-router";
import EatingTogether from "@/assets/undraw_eating_together.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box preset="stack-center" className="w-full min-h-screen">
      <Box preset="grid-split" gap={0} className="w-full max-w-6xl md:gap-10">
        <Box preset="stack-center" className="order-last p-6 md:order-none">
          <img
            src={EatingTogether}
            alt="Eat Together"
            className="w-auto m-auto md:max-w-md"
          />
        </Box>
        <Box
          preset="stack-center"
          gap={10}
          className="container px-4 py-10 mx-auto grow"
        >
          <Box preset="stack-center" className="">
            <Brand />
            <Typography
              variant={"sub"}
              color={"light"}
              align="center"
              className="max-w-lg"
            >
              Streamline your dining experience with our efficient and
              user-friendly ordering system. Skip the hassle of third-party
              platforms and order directly from us!
            </Typography>
          </Box>

          <Box preset="grid-split" gap={8} className="hidden">
            <Box preset={"stack-center"} className="p-4 px-6 bg-background">
              <Typography variant="h4" color="info">
                For Restaurant Managers
              </Typography>
              <Typography>
                ✔️ Efficient Billing System
                <br />
                ✔️ Kitchen Order Display
                <br />
                ✔️ Customer Order Display
                <br />
                ✔️ Comprehensive Order Management
              </Typography>
            </Box>

            <Box preset={"stack-center"} className="p-4 px-6 bg-background">
              <Typography variant="h4" color="info">
                For Customers
              </Typography>
              <Typography>
                ✔️ QR Code Menu Access
                <br />
                ✔️ Self Ordering
                <br />
                ✔️ Self Takeaway Ordering
                <br />
                ✔️ Order Tracking
              </Typography>
            </Box>
          </Box>

          <Box preset="row-center" gap={4}>
            <Link to="/login">
              <Button variant={"default"}>Manager Login</Button>
            </Link>
            <Button variant={"outline"} disabled={true}>
              Customer Interface
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
