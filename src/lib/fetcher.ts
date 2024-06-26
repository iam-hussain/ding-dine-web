import {
  setFormValidationErrors,
  setUnexpectedFormError,
} from "@iam-hussain/qd-copilot";
import { cookieNames, getCookieAsync } from "./cookies";

export interface FetcherPropsOptions {
  method?: string;
  header?: any;
  body?: any;
  setError?: (
    name: any,
    error: {
      type: string;
      message: string;
    },
    options?:
      | {
          shouldFocus: boolean;
        }
      | undefined
  ) => void;
}

const fetcher = async (
  path: string,
  options?: FetcherPropsOptions
): Promise<any> => {
  const { method = "GET", header = {}, body = {}, setError } = options || {};

  try {
    const token = await getCookieAsync(cookieNames.access_token);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/api${path}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...header,
        },
        ...(method !== "GET" ? { body: JSON.stringify(body) } : {}),
      }
    );

    const responseData = await response.json();

    if (["INVALID_ACCESS"].includes(responseData?.message)) {
      return (window.location.href = "/logout");
    }

    if (response.status !== 200 && setError) {
      setFormValidationErrors(responseData, setError);
      throw new Error("RESPONSE_STATUS_ERROR");
    }

    return responseData;
  } catch (err: any) {
    if (err?.message !== "RESPONSE_STATUS_ERROR" && setError) {
      setUnexpectedFormError(setError);
    }
    throw new Error(err?.message || err);
  }
};

export interface FetcherOptions {
  header?: any;
  body?: any;
  setError?: (
    name: any,
    error: {
      type: string;
      message: string;
    },
    options?:
      | {
          shouldFocus: boolean;
        }
      | undefined
  ) => void;
}
// Function to fetch data using the GET method
fetcher.get = (path: string, options: FetcherOptions) => {
  return fetcher(path, { method: "GET", ...options });
};

// Function to fetch data using the POST method
fetcher.post = (path: string, options: FetcherOptions) => {
  return fetcher(path, { method: "POST", ...options });
};

// Function to fetch data using the PATCH method
fetcher.patch = (path: string, options: FetcherOptions) => {
  return fetcher(path, { method: "PATCH", ...options });
};

// Function to fetch data using the DELETE method
fetcher.delete = (path: string, options: FetcherOptions) => {
  return fetcher(path, { method: "DELETE", ...options });
};

export default fetcher;
