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

  const opacity = useTransform(
    scrollYProgress,
    [-0.1, 0.4],
    [0, 1]
  );

  return (
    <div className="bg-white mx-8 md:mx-16 lg:mx-32 my-32 rounded-2xl text-center border-4 border-double">
      <motion.div
        style={{ opacity: opacity }}
        ref={ref}
        className="h-full text-accent-dark text-start py-16 md:px-24 px-12 flex md:flex-row flex-col-reverse"
      >
        <div className="xl:w-2/3">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-5xl mb-8 underline underline-offset-1 decoration-green-300 poppins">
              ABOUT ME
            </h1>
            <img
              className="lg:w-[12rem] w-[7rem] xl:hidden block"
              src="src/assets/profile.jpeg"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="flex gap-4 items-center ">
            <div className="text-lg flex flex-col gap-4">
              <p>Hi! I'm Will. </p>
              <p className="">
                I'm a{" "}
                <span className="bg-green-500">Computer Science student</span>{" "}
                studying at{" "}
                <span className="bg-green-500">Monash University</span> in
                Melbourne, Australia.
              </p>
              <p>
                I'm on the path to become a {" "}
                <span className="bg-green-500">
                  full-stack software engineer
                </span>
                , with passion residing in web development and emerging
                technologies.
              </p>
              <p>
                I also love teaching others - I've spent time as a{" "}
                <span className="bg-green-500">Teaching Associate</span>,
                instructing for an introduction to programming unit in Python.
              </p>
              <p>
                Moreover, I spend most of my time outside of my work as a{" "}
                <span className="bg-green-500">
                  Software Development Intern
                </span>{" "}
                at Monash University involved in{" "}
                <span className="bg-green-500">student clubs</span>, where I
                seek to pass on as much knowledge as I can to students who are
                as keen as me!
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3 items-center xl:flex hidden m-8">
          <img
            className="w-full"
            src="src/assets/profile.jpeg"
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
