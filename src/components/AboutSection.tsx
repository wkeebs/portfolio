import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

const AboutSection = (props: any) => {
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

  const style = {
    width: `250px`,
    borderRadius: '50%',  // This creates the circle shape
  }

  return (
    <div className="h-screen bg-white mx-8 md:mx-16 lg:mx-32 mt-32 pt-8 rounded-2xl text-center">
      <motion.div style={{ opacity: opacity }} ref={ref} className="h-full">
        <h1 className="text-accent-dark text-5xl">ABOUT ME</h1>
        <slot />
        <img src="src/assets/profile.jpeg" style={style}/>
      </motion.div>
    </div>
  );
};

export default AboutSection;
