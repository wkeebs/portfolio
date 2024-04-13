import React, { useEffect } from "react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollTextProps = {
  color: string;
};

const ScrollDownText: React.FC<ScrollTextProps> = ({ color }) => {
  const { scrollYProgress } = useScroll();

  // Transform scrollYProgress to reverse the opacity
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <motion.p
        style={{ opacity, color: color }}
        className="text-sm rotate-90 relative top-8"
      >
        <motion.p
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          animate={{
            x: ["15%", "0%", "15%"],
          }}
        >
          scroll &rarr;
        </motion.p>
      </motion.p>
    </>
  );
};

export default ScrollDownText;
