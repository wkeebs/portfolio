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

  const opacity = useTransform(scrollYProgress, [-0.1, 0.4], [0, 1]);

  return (
    <div className="bg-white my-32 rounded-2xl text-center border-4 border-double">
      <motion.div
        style={{ opacity: opacity }}
        ref={ref}
        className="h-full text-dark-bg text-start py-10 md:py-20 md:px-24 px-12 flex md:flex-row flex-col-reverse"
      >
        <div className="xl:w-2/3">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-5xl mb-8 underline underline-offset-1 cal-sans decoration-accent-light">
              ABOUT ME
            </h1>
            <img
              className="lg:w-[12rem] w-[7rem] xl:hidden block"
              src="/assets/profile.jpeg"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="flex gap-4 items-center ">
            <div className="md:text-lg flex flex-col gap-4 text-sm">
              <p>Hi! I'm Will. </p>
              <p className="">
                I'm a{" "}
                <span className="bg-accent-light">Computer Science student</span>{" "}
                studying at{" "}
                <span className="bg-accent-light">Monash University</span> in
                Melbourne, Australia.
              </p>
              <p>
                I grew up in{" "}
                <span className="bg-accent-light">Ballarat, Victoria</span>, and
                moved to Melbourne to study CS shortly after high school.
              </p>
              <p>
                I'm a passionate software engineer, and I'm always learning new
                things!
              </p>
              <p>
                I also love teaching others - I've spent time as a{" "}
                <span className="bg-accent-light">Teaching Associate</span>,
                instructing for Monash's introduction to programming unit in
                Python.
              </p>
              <p>
                Moreover, I spend most of my time outside of my studies as the{" "}
                <span className="bg-accent-light">
                  {" "}
                  Vice President of{" "}
                  <a href="https://www.monashcoding.com/" className="underline">
                    Monash Association of Coding (MAC)
                  </a>
                </span>{" "}
                where I seek to pass on as much knowledge as I can to students
                who are as keen as me!
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3 items-center xl:flex hidden m-8">
          <img
            className="w-full"
            src="/assets/profile.jpeg"
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
