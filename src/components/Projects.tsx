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
    title: "Groupzy 🥇",
    description:
      "A competitive study group web app my team and I built for StartHack 2024, where we participated in the Education Technology (EdTech) stream. We won first place! This was my first real hackathon experience and it was fantastic to work in a productive team across the hacking time. We used Next.js for the front end (a new experience for all of us), and Google's Firebase for user authentication.",
    technologies: ["Next.js", "React.js", "Firebase"],
    // link: "https://devpost.com/software/groupzy",
    link: "https://starthack-2024-bysebts-projects.vercel.app/",
    image: "/assets/groupzy.jpeg",
  },
  {
    title: "Personal Portfolio Site 🚀",
    description: "This website! I built this to showcase my portfolio with a bit of my personality; I chose to experiment using Astro.js (a new framework for me) and some reactive islands with React and Framer motion. This was a fun project to experiment with. (click for recursion...)",
    technologies: ["Astro.js", "React.js", "Framer Motion"],
    // link: "https://devpost.com/software/groupzy",
    link: "/",
    image: "/assets/portfolio.jpeg",
  },
  {
    title: "FRP Tetris 🧩",
    description:
      "Classic Tetris, implemented with functional reactive programming principles by utilising Rx.js. This project was a part of my journey to learn functional programming - at this point I was covering observable streams, the crux of this project. The challenging part of this project was definitely the use of these observables, and is the reason I'm proud to call this my first \"real\" project.",
    technologies: ["TypeScript", "Rx.js"],
    link: "https://main--frp-tetris.netlify.app/",
    image: "/assets/frp-tetris.jpeg",
  },
  {
    title: "Rock Paper Scissors 🪨",
    description:
      "This project marked the start of my web development journey - and although elementary, it is a token which represents the start of my career. This was built as a part of my progression through The Odin Project, where I learned the absolute fundamentals of web development. I experimented with my new skills by spending hours creating a simple rock paper scissors game with animations, and this was my final product. Enjoy :)",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://wkeebs.github.io/rock-paper-scissors/",
    image: "/assets/rock-paper-scissors.jpeg",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 mb-16">
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
