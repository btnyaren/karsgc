"use client"
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

type AnimationContainerProps = HTMLMotionProps<"div">

const AnimationContainer = ({children, ...props}: AnimationContainerProps) => {
    return (
        <motion.div {...props}>
            {children}
        </motion.div>
    );
};

export default AnimationContainer;