import Box from "@/components/atoms/box";
import { CustomLink } from "@/components/atoms/link";
import Typography from "@/components/atoms/typography";
import AvatarCircle from "@/components/molecules/avatar-circle";
import { RootState } from "@/store";
import { createFileRoute } from "@tanstack/react-router";
import { useSelector } from "react-redux";

export const Route = createFileRoute("/_user/home")({
  component: Home,
});

function Home() {
  const user = useSelector((state: RootState) => state.base.user);

  return (
    <Box
      preset={"row-responsive"}
      variant={"container"}
      data-name={"page"}
      gap={6}
    >
      <Box preset={"col-responsive"} data-name={"avatar"}>
        <AvatarCircle
          name={user.fullName}
          image={user?.image}
          className="w-16 h-16 md:h-60 md:w-60"
          avatarClassName="md:text-6xl"
        />
        <Box preset={"col-center"} className="w-auto" gap={0}>
          <Typography variant={"h2"} className="text-md md:text-4xl">
            {user.fullName}
          </Typography>
          <Typography variant={"sub"} className="text-base md:text-2xl">
            {user.email}
          </Typography>
        </Box>
      </Box>
      <Box preset={"col-start"} className="grow" gap={4}>
        <Typography variant={"caption"}>Stores</Typography>
        <Box preset={"col-start"} className="grow" gap={2}>
          {(user?.stores || []).map((e: any) => (
            <Box
              key={e.id}
              preset={"row-start"}
              className="p-4 border rounded-lg bg-background min-w-[200px]"
              gap={4}
            >
              <Box gap={0} preset={"col-start"}>
                <Typography variant={"body"}>{e.name}</Typography>
                <Typography variant={"sub"}>{e.slug}</Typography>
              </Box>
              <CustomLink
                variant={"outline"}
                to={`/store/$slug`}
                params={{
                  slug: e.slug,
                }}
                iconName="MdStorefront"
              >
                Manage
              </CustomLink>
            </Box>
          ))}
        </Box>
        <CustomLink
          variant={"outline"}
          className="w-full"
          to={"/"}
          iconName="MdAdd"
        >
          Create new store
        </CustomLink>
      </Box>
    </Box>
  );
}
