import Box from "@/components/atoms/box";
import { classNames } from "@/lib/utils";
import Brand from "@/components/atoms/brand";
import { motion } from "framer-motion";
import { Separator } from "@/components/atoms/separator";

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
      className={classNames("bg-paper p-6 md:pb-20", className, {
        "min-h-screen": minFullScreen,
      })}
    >
      <Box preset={"stack-center"} gap={8}>
        <Box preset={"stack-center"} className="max-w-lg pb-10">
          <Brand />
          <Separator />
        </Box>{" "}
        <Box preset={"stack-center"} gap={4} className="max-w-lg">
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
        </Box>
      </Box>
    </Box>
  );
}

export default Loader;
