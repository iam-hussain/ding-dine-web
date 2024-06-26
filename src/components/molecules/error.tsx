import { ErrorComponent } from "@tanstack/react-router";
import Box from "@/components/atoms/box";
import { classNames } from "@/lib/utils";
import Brand from "@/components/atoms/brand";
import Typography from "@/components/atoms/typography";
import { CustomLink } from "../atoms/link";
import { Separator } from "../atoms/separator";

function Error({ className, error }: { className?: string; error?: any }) {
  return (
    <Box
      className={classNames("min-h-screen bg-paper p-6 md:pb-20", className)}
    >
      <Box preset={"stack-center"} gap={8}>
        <Box preset={"stack-center"} className="max-w-lg">
          <Brand />
          <Separator />
        </Box>
        <Box preset={"stack-center"} gap={4} className="max-w-lg">
          <Typography className="uppercase text-9xl">Oops!</Typography>
          <Typography variant={"h3"} className="uppercase">
            An Error Occurred
          </Typography>
          <Typography className="text-center" variant={"sub"}>
            We regret to inform you that an error has occurred while trying to
            access this page. This may be due to a server issue or a problem
            with the page itself. Our technical team has been notified and is
            working to resolve the issue as quickly as possible. Please try
            again later. If you need immediate assistance, please contact our
            support team.
          </Typography>
          <CustomLink to="/">Return to Home Page</CustomLink>
        </Box>
        {error && import.meta.env.DEV && <ErrorComponent error={error} />}
      </Box>
    </Box>
  );
}

export default Error;
