import React, { useState } from "react";

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
  {
    title: "Groupzy",
    description:
      "Competitive study app, built for StartHack 2024. Won first place.",
    technologies: ["Next.js, Firebase, Vercel"],
    link: "https://devpost.com/software/groupzy",
    image: "src/assets/profile.jpeg",
  },
  {
    title: "Groupzy",
    description:
      "Competitive study app, built for StartHack 2024. Won first place.",
    technologies: ["Next.js, Firebase, Vercel"],
    link: "https://devpost.com/software/groupzy",
    image: "src/assets/profile.jpeg",
  },
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
    <div className="flex flex-col gap-8">
      {projectDetails.map((proj: Project) => (
        <ProjectCard proj={proj} />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  proj: Project;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row bg-dark-bg rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 border border-accent-light hover:cursor-pointer hover:scale-[0.98]">
      <a
        href={proj.link}
        className="w-full flex flex-col md:flex-row"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative md:w-1/3 w-full">
          <img
            className="w-full h-64 md:h-full object-cover opacity-90 transition duration-500 ease-in-out rounded-none"
            src={proj.image}
            alt={proj.title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-bg opacity-80"></div>
        </div>

        {/* Project Content */}
        <div className="w-full h-full flex flex-col justify-between px-6 py-6 md:w-2/3">
          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-accent-light mb-3">
              {proj.title}
            </h2>
            <p className="text-gray-300 text-base mb-4">{proj.description}</p>
          </div>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-2">
            {proj.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="inline-block bg-accent-dark text-white rounded-full px-3 py-1 text-sm font-semibold transition duration-300 ease-in-out hover:bg-accent-light"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};


export default Projects;
