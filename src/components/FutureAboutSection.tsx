import { Glow, GlowCapture } from "@codaworks/react-glow";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
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

  const opacity = useTransform(scrollYProgress, [-0.1, 0.4], [0, 1]);

  // Text content
  const aboutText = [
    { text: "Hey, I'm ",
      highlighted: " Will",
      afterText: "!"
     },
    {
      text: "I'm a ",
      highlighted: "Computer Science student",
      afterText: " studying at ",
      highlighted2: "Monash University",
      afterText2: " in Melbourne, Australia.",
    },
    {
      text: "I grew up in ",
      highlighted: "Ballarat, Victoria",
      afterText:
        ", and moved to Melbourne to study CS shortly after high school.",
    },
    {
      text: "In my free time I play a lot of ",
      highlighted: "Futsal",
      afterText:
        ", having played at a competitive level all my life; I've represented Monash, Victoria and Australia!",
    },
    {
      text: "I love teaching others - I've spent time as a ",
      highlighted: "Teaching Associate",
      afterText:
        ", instructing for Monash's introduction to programming unit in Python.",
    },
    {
      text: "Moreover, I spend most of my time outside of my studies as the ",
      highlighted: "Vice President of Monash Association of Coding (MAC)",
      afterText:
        ", where I seek to pass on as much knowledge as I can to students who are as keen as me!",
    },
  ];

  return (
    <GlowCapture className="bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter border border-accent-light shadow-lg rounded-2xl text-center">
      <motion.div
        style={{ opacity: opacity }}
        ref={ref}
        className="h-full text-gray-100 text-start py-10 md:py-20 md:px-24 px-8 flex flex-row"
      >
        <Glow color="lightgreen">
          <div className="text-glow">
            <div className="w-full flex justify-between items-center ">
              <h1 className="text-6xl md:text-8xl mb-8 underline underline-offset-4 decoration-accent-light ">
                ABOUT ME
              </h1>
              <img
                className="xl:w-[16rem] lg:w-[12rem] sm:w-[10rem] w-[7rem] block rounded-full border-2 border-accent-light shadow-accent-light/40 shadow-md"
                src="/assets/profile.jpeg"
                alt="Profile"
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="md:text-lg text-base flex flex-col gap-4">
                {/* Dynamically map text */}
                {aboutText.map((section, index) => (
                  <p key={index}>
                    {section.text}
                    {section.highlighted && (
                      <span className="bg-accent-light/20 text-accent-light px-2 rounded-md">
                        {section.highlighted}
                      </span>
                    )}
                    {section.afterText}
                    {section.highlighted2 && (
                      <span className="bg-accent-light/20 text-accent-light px-2 rounded-md">
                        {section.highlighted2}
                      </span>
                    )}
                    {section.afterText2}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Glow>
      </motion.div>
    </GlowCapture>
  );
};

export default AboutSection;
