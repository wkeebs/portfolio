import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative mx-8 mb-24 flex justify-between pt-12 pb-6 items-center md:mx-16 lg:mx-32">
      {/* <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#FFF"
          strokeLinecap="round"
        />
      </svg> */}
      <h1 className="text-lg font-bold text-white">
        <a href="/">Will Keeble</a>
      </h1>

      {matches && (
        <div className="flex gap-12 text-white">
          <a href="/">about</a>
          <a href="/">projects</a>
          <a href="/">contact</a>
          <a href="/">resume</a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-white"
          ></motion.span>
          <motion.span
            animate={{ opacity: toggled ? 0 : 1 }}
            className="block h-0.5 w-6 bg-white"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-white"
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="flex fixed bottom-0 left-0 w-full h-screen items-center justify-center text-white bg-dark-bg"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="/">
              about
            </motion.a>
            <motion.a variants={itemMotion} href="/">
              projects
            </motion.a>
            <motion.a variants={itemMotion} href="/">
              contact
            </motion.a>
            <motion.a variants={itemMotion} href="/">
              resume
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
