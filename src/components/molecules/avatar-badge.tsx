import Box from "@/components/atoms/box";
import AvatarCircle from "./avatar-circle";
import Typography from "../atoms/typography";

function AvatarBadge({
  hed,
  dek,
  image = "",
}: {
  hed: string;
  dek?: string;
  image?: string;
  minimize?: boolean;
  className?: string;
}) {
  return (
    <Box>
      <AvatarCircle name={hed} image={image} />
      <Box preset={"stack-start"} gap={0}>
        <Typography variant={"h6"}>{hed}</Typography>
        <Typography variant={"sub"}>{dek}</Typography>
      </Box>
    </Box>
  );
}

export default AvatarBadge;
