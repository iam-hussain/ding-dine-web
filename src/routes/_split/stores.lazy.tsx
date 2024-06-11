import { createLazyFileRoute } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";

import Box from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  // SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import Typography from "@/components/atoms/typography";
import { cookieNames, removeCookieAsync } from "@/lib/cookies";

export const Route = createLazyFileRoute("/_split/stores")({
  component: Index,
});

function Index() {
  const router = useRouter();

  const onLogout = async () => {
    await removeCookieAsync(cookieNames.access_token);
    router.history.push("/");
  };
  return (
    <Box
      preset={"stack-center"}
      className="w-full max-w-sm p-4 bg-background md:p-8"
    >
      <Typography as={"h2"} variant={"h2"} className="w-full pb-4">
        Stores.
      </Typography>
      <div className="flex flex-col w-full mb-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a store" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {/* {categories?.map((e) => (
                      <SelectItem key={e.id} value={e.id}>
                        {e.name}
                      </SelectItem>
                    ))} */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Box preset={"row-start"} className="w-full" gap={2}>
        <Typography as={"p"} variant={"sub"} className="">
          Try different account?
        </Typography>
        <Button variant={"link"} className="p-0" onClick={() => onLogout()}>
          Logout
        </Button>
      </Box>
    </Box>
  );
}
