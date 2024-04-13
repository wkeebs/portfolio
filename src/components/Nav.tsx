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

const Nav = (props: any) => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 720px)");

  return (
    <nav className="relative mx-8 flex justify-between pt-12 pb-6 items-center md:mx-16 lg:mx-32">
      <a className="text-2xl text-white hover:bg-green-400 hover:text-accent-dark transition-all" href="\">
        {" "}
        <span className="text-green-700">{"<"}</span> WK <span className="text-green-700">{">"}</span>
      </a>

      {matches && (
        <div className="flex gap-12 text-white transition-all">
          <a className="hover:underline-offset-2 hover:underline" href="/">about</a>
          <a className="hover:underline-offset-2 hover:underline" href="/">projects</a>
          <a className="hover:underline-offset-2 hover:underline" href="/">contact</a>
          {props.resumeBtn}
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
            className="flex flex-col gap-24 text-lg items-center content-center"
          >
            <motion.a className="hover:underline-offset-2 hover:underline" variants={itemMotion} href="/">
              about
            </motion.a>
            <motion.a className="hover:underline-offset-2 hover:underline" variants={itemMotion} href="/">
              projects
            </motion.a>
            <motion.a className="hover:underline-offset-2 hover:underline" variants={itemMotion} href="/">
              contact
            </motion.a>
            <motion.div variants={itemMotion}>{props.resumeBtn}</motion.div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
