import { redirect } from "@tanstack/react-router";
import { cookieNames, getCookie, removeCookieAsync } from "./cookies";

export const shouldBeLoggedIn = ({ location }: { location: Location }) => {
  const token = getCookie(cookieNames.access_token);
  if (!token) {
    throw redirect({
      to: "/login",
      search: {
        redirect: location.href,
      },
    });
  }
};

export const shouldNotBeLoggedIn = () => {
  const token = getCookie(cookieNames.access_token);
  if (token) {
    throw redirect({
      to: "/store",
    });
  }
};

export const shouldBeLoggedOut = async () => {
  await removeCookieAsync(cookieNames.access_token);
  throw redirect({
    to: "/login",
  });
};
