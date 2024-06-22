import Box from "@/components/atoms/box";
import { classNames } from "@/lib/utils";
import Brand from "@/components/atoms/brand";
import { motion } from "framer-motion";

function Loader({
  className,
  minFullScreen = false,
}: {
  className?: string;
  minFullScreen?: boolean;
}) {
  const dotStyle = "w-10 h-10 bg-primary rounded-full";

  return (
    <Box
      className={classNames("bg-background", className, {
        "min-h-screen": minFullScreen,
      })}
    >
      <Box preset={"stack-center"} gap={8}>
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ rotate: 0 }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <motion.div
            className={dotStyle}
            initial={{ scale: 1, x: 0 }}
            animate={{ scale: [1, 0.5, 1] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.div
            className={dotStyle}
            initial={{ scale: 1, x: 0 }}
            animate={{ scale: [1, 0.5, 1] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 0.25,
            }}
          />
        </motion.div>
        <Brand />
      </Box>
    </Box>
  );
}

export default Loader;
