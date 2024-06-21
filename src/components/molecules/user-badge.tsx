import Box from "@/components/atoms/box";
import UserAvatar from "./user-avatar";
import Typography from "../atoms/typography";

function UserBadge({
  firstName,
  lastName,
  username,
  image = "",
}: {
  firstName: string;
  lastName?: string;
  username: string;
  image?: string;
  minimize?: Boolean;
  className?: string;
}) {
  return (
    <Box>
      <UserAvatar firstName={firstName} image={image} />
      <Box preset={"stack-start"} gap={0}>
        <Typography
          variant={"h6"}
        >{`${firstName}${lastName ? ` ${lastName}` : ""}`}</Typography>
        <Typography variant={"sub"}>{`${username}`}</Typography>
      </Box>
    </Box>
  );
}

export default UserBadge;
