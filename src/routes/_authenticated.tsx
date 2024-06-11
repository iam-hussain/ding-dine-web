import { useQueries } from "@tanstack/react-query";
import {
  createFileRoute,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

import { cookieNames, getCookieAsync, removeCookieAsync } from "@/lib/cookies";
import fetcher from "@/lib/fetcher";
import { setBaseData } from "@/store/baseSlice";

// Authentication check function
const isTokenCookieExist = async () => {
  const tokenData = await getCookieAsync(cookieNames.access_token);
  return !!tokenData;
};

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ location }) => {
    const tokenExist = await isTokenCookieExist();
    if (!tokenExist) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => <AuthenticatedComponent />,
});

// Component for authenticated routes
const AuthenticatedComponent: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const commonRefetchConfig = {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  };

  const combinedQueries = [
    {
      queryKey: ["me"],
      queryFn: () => fetcher("/authentication/me"),
      ...commonRefetchConfig,
    },
    {
      queryKey: ["store"],
      queryFn: () => fetcher("/store"),
      ...commonRefetchConfig,
    },
  ];

  const combinedResponse = useQueries({
    queries: combinedQueries,
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  useEffect(() => {
    if (!combinedResponse.pending && combinedResponse.data[0]?.id) {
      dispatch(
        setBaseData({
          user: combinedResponse.data[0],
          store: combinedResponse.data[1],
        })
      );
    } else if (!combinedResponse.pending && combinedResponse.data[0]?.message) {
      // if (combinedResponse.data[0]?.message === "INVALID_STORE_TOKEN") {
      //   router.history.push("/stores");
      // } else {
      removeCookieAsync(cookieNames.access_token).then(() => {
        router.history.push("/");
      });
      // }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [combinedResponse]);

  if (combinedResponse.pending) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
