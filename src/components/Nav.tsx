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

  const toggle = () => setToggled((prevToggle) => !prevToggle);

  return (
    <nav className="absolute px-8 md:px-16 lg:px-32 flex justify-between pt-12 pb-6 items-center z-50 uppercase tracking-widest w-full">
        <a
          className="text-2xl text-white hover:bg-accent-light hover:text-accent-dark transition-all"
          href="\"
        >
          {" "}
          <span className="text-accent">{"<"}</span> keeble.tech{" "}
          <span className="text-accent">{">"}</span>
        </a>

        {matches && (
          <div className="flex gap-12 text-white transition-all">
            <a
              className="hover:underline-offset-2 hover:underline"
              href="#about"
            >
              about
            </a>
            <a
              className="hover:underline-offset-2 hover:underline"
              href="#experience"
            >
              experience
            </a>
            <a
              className="hover:underline-offset-2 hover:underline"
              href="#projects"
            >
              projects
            </a>
            <a
              className="hover:underline-offset-2 hover:underline"
              href="#contact"
            >
              contact
            </a>
            {props.resumeBtn}
          </div>
        )}

        {!matches && (
          <div onClick={toggle} className={`${toggled ? "fixed top-8 right-8" : ""} space-y-1.5 cursor-pointer z-50`}>
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
            className="flex fixed top-0 left-0 w-full h-full items-center justify-center text-white bg-dark-bg"
          >
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="flex flex-col gap-24 text-lg items-center content-center"
            >
              <motion.a
                className="hover:underline-offset-2 hover:underline"
                variants={itemMotion}
                href="#about"
                onClick={toggle}
              >
                about
              </motion.a>
              <motion.a
                className="hover:underline-offset-2 hover:underline"
                variants={itemMotion}
                href="#experience"
                onClick={toggle}
              >
                experience
              </motion.a>
              <motion.a
                className="hover:underline-offset-2 hover:underline"
                variants={itemMotion}
                href="#projects"
                onClick={toggle}
              >
                projects
              </motion.a>
              <motion.a
                className="hover:underline-offset-2 hover:underline"
                variants={itemMotion}
                href="#contact"
                onClick={toggle}
              >
                contact
              </motion.a>
              <motion.div onClick={toggle} variants={itemMotion}>
                {props.resumeBtn}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
    </nav>
  );
};

export default Nav;
