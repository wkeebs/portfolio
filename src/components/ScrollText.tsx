import React, { useEffect } from "react";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollText = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.p
                style={{ opacity: scrollYProgress }}
                className="text-accent-dark text-sm rotate-90 relative top-8"
            >
                scroll &rarr;
            </motion.p>
        </>
    );
};

export default ScrollText;
