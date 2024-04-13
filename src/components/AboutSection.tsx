import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const AboutSection = () => {
    const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div className="h-[40rem] bg-white mt-32 pt-8 rounded-2xl m-4 text-center">
      <motion.div style={{ opacity: opacity }} ref={ref} className="h-full">
        <h1 className="text-accent-dark text-5xl">About me</h1>
      </motion.div>
    </div>
  );
};

export default AboutSection;
