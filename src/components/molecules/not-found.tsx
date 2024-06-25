import Box from "@/components/atoms/box";
import { classNames } from "@/lib/utils";
import Brand from "@/components/atoms/brand";
import Typography from "@/components/atoms/typography";
import { CustomLink } from "../atoms/link";
import { Separator } from "../atoms/separator";

function NotFound({ className }: { className?: string }) {
  return (
    <Box className={classNames("min-h-screen bg-paper", className)}>
      <Box preset={"stack-center"} gap={8} className="p-4 pb-36">
        <Box preset={"stack-center"} className="max-w-lg">
          <Brand />
          <Separator />
        </Box>
        <Box preset={"stack-center"} gap={4} className="max-w-lg">
          <Typography className="uppercase text-9xl">404</Typography>
          <Typography variant={"h3"} className="uppercase">
            Page Not Found
          </Typography>
          <Typography className="text-center">
            We apologize, but the page you are looking for does not exist. It
            may have been moved, deleted, or the URL may be incorrect. Please
            check the URL and try again. If you continue to experience issues,
            feel free to contact our support team for assistance.
          </Typography>
          <CustomLink to="/">Return to Home Page</CustomLink>
        </Box>
      </Box>
    </Box>
  );
}

export default NotFound;
