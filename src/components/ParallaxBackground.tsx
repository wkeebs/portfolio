import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Particles from "./Particles";

const ParallaxBackground = () => {
  const { scrollY } = useScroll(); // Get the current vertical scroll position
  const y = useTransform(scrollY, [0, 500], [0, -200]); // Map scroll range to desired y movement range

  return (
    <>
      <motion.div
        className="hero-bg"
        style={{
          position: "fixed", // Fixed position to make it stay in place during scroll
          width: "100%",
          height: "125vh", // Full viewport height
          backgroundSize: "cover", // Cover the entire size of the div
          zIndex: -1, // Keep it behind other content
          y,
        }}
      >
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
      </motion.div>
    </>
  );
};

export default ParallaxBackground;
