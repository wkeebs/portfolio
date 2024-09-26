import React, { useState } from "react";
import { Glow, GlowCapture } from "@codaworks/react-glow";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

const projectDetails: Project[] = [
  {
    title: "Groupzy",
    description:
      "Competitive study app, built for StartHack 2024. Won first place.",
    technologies: ["Next.js, Firebase, Vercel"],
    link: "https://devpost.com/software/groupzy",
    image: "src/assets/profile.jpeg",
  },
];

const Projects = () => {
  return (
    <>
      {projectDetails.map((proj: Project) => (
        <ProjectCard proj={proj} />
      ))}
    </>
  );
};

interface ProjectCardProps {
  proj: Project;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GlowCapture size={70}>
      <Glow color="white">
        <a
          href={proj.link}
          className={`max-w-sm block rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 relative ${
            isHovered ? "scale-100" : "scale-95"
          } bg-dark-bg backdrop-filter backdrop-blur-lg text-white hover:cursor-pointer`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {/* Optional Image Section */}
            <img
              className="w-full h-48 object-cover opacity-80"
              src={proj.image}
              alt={proj.title}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-75"></div>
          </div>
          <div className="w-full h-full glow:bg-glow/25">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {proj.title}
              </div>
              <p className="text-gray-400 text-base mb-4">{proj.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-wrap">
              {proj.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition duration-300 ease-in-out "
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      </Glow>
    </GlowCapture>
  );
};

export default Projects;
