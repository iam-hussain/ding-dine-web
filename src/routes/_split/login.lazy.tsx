import { createLazyFileRoute } from "@tanstack/react-router";

import Box from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import Typography from "@/components/atoms/typography";
import LoginForm from "@/components/forms/login-form";

export const Route = createLazyFileRoute("/_split/login")({
  component: Login,
});

function Login() {
  return (
    <Box preset={"stack-center"} className="w-full max-w-sm">
      <Box preset={"stack-center"} gap={0} className="w-full">
        <Typography as={"h3"} variant={"h3"} className="w-full">
          Welcome back.
        </Typography>
        <Typography as={"p"} variant={"caption"} className="w-full">
          Login to your account.
        </Typography>
      </Box>
      <Box preset={"stack-center"} className="w-full">
        <LoginForm />
      </Box>
      <Box preset={"stack-center"} className="w-full mt-4" gap={2}>
        <Typography as={"p"} variant={"sub"} className="w-full">
          Need it for your store?
        </Typography>
        <Button variant={"outline"} className="w-full">
          Create Account
        </Button>
      </Box>
    </Box>
  );
}
