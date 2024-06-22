import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { animateHover } from "@/lib/animate";
import { classNames } from "@/lib/utils";

function AvatarCircle({
  name,
  className,
  avatarClassName,
  image = "",
  withAnimation = false,
}: {
  name: string;
  image?: string;
  className?: string;
  avatarClassName?: string;
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
        className={classNames(
          "w-8 h-8 cursor-pointer select-none bg-paper",
          className
        )}
        tabIndex={-1}
      >
        <AvatarImage src={image} alt={name} tabIndex={-1} />
        <AvatarFallback
          className={classNames(
            "text-base bg-primary text-primary-foreground",
            avatarClassName
          )}
          tabIndex={-1}
        >
          {(name || "D").slice(0, 1)}
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
}

export default AvatarCircle;
