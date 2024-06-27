import { createFileRoute, useNavigate } from "@tanstack/react-router";

import Box from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import Typography from "@/components/atoms/typography";
import LoginForm from "@/components/forms/login";
import { z } from "zod";
import { cookieNames, setCookieAsync } from "@/lib/cookies";
import { shouldNotBeLoggedIn } from "@/lib/middleware";

export const Route = createFileRoute("/_split/login")({
  beforeLoad: shouldNotBeLoggedIn,
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const redirect = search.redirect;

  const onSuccessHandler = async (token: string) => {
    await setCookieAsync(cookieNames.access_token, token);
    if (redirect) {
      navigate({ to: redirect });
    } else {
      navigate({ to: "/home" });
    }
  };

  return (
    <Box preset={"col-center"} className="w-full max-w-sm bg-background">
      <Box preset={"col-center"} gap={0} className="w-full">
        <Typography as={"h3"} variant={"h3"} className="w-full">
          Welcome back.
        </Typography>
        <Typography as={"p"} variant={"caption"} className="w-full">
          Login to your account.
        </Typography>
      </Box>
      <Box preset={"col-center"} className="w-full">
        <LoginForm onSuccess={onSuccessHandler} />
      </Box>
      <Box preset={"col-center"} className="w-full mt-4" gap={2}>
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
