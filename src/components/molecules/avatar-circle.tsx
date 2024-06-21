import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { animateHover } from "@/lib/animate";

function AvatarCircle({
  name,
  image = "",
  withAnimation = false,
}: {
  name: string;
  image?: string;
  className?: string;
  withAnimation?: boolean;
}) {
  return (
    <motion.div
      {...(withAnimation
        ? {
            whileHover: "hover",
            whileTap: "pressed",
            variants: animateHover,
          }
        : {})}
      tabIndex={-1}
    >
      <Avatar
        className="w-8 h-8 cursor-pointer select-none bg-paper"
        tabIndex={-1}
      >
        <AvatarImage src={image} alt={name} tabIndex={-1} />
        <AvatarFallback
          className="text-base bg-primary text-primary-foreground"
          tabIndex={-1}
        >
          {name.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
}

export default AvatarCircle;
