import React, { useEffect, useRef, useState } from "react";

interface WorkExperienceCardProps {
  jobTitle: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
  logoUrl: string;
  previousTitles?: string[]; // Optional previous titles
}

const WorkExperience: React.FC = () => {
  const workExperiences = [
    {
      jobTitle: "Vice President",
      previousTitles: ["Events Director", "Events Officer"],
      company: "Monash Association of Coding (MAC)",
      duration: "Jan 2024 - Present",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      logoUrl: "assets/MAC-logo.png",
    },
    {
      jobTitle: "Software Engineering Intern",
      company: "Monash eSolutions",
      duration: "Jan 2024 - Jul 2024",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      ],
      skills: ["Node.js", "Express", "MongoDB", "REST API"],
      logoUrl: "assets/monash-logo.jpg",
    },
    {
      jobTitle: "SEE Program - Software Engineering Track",
      company: "Jane Street",
      duration: "Jul 2024",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      ],
      skills: ["React", "Node.js", "GraphQL", "Docker"],
      logoUrl: "assets/janestreet-logo.png",
    },
    {
      jobTitle: "Teaching Associate",
      company: "Monash University - Faculty of Information Technology",
      duration: "Feb 2023 - Jan 2024",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      ],
      skills: ["React", "Node.js", "GraphQL", "Docker"],
      logoUrl: "assets/monashfit-logo.jpeg",
    },
    {
      jobTitle: "Database Administration Intern",
      company: "Mannix College",
      duration: "Sep 2022 - Mar 2023",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      ],
      skills: ["React", "Node.js", "GraphQL", "Docker"],
      logoUrl: "assets/mannix-logo.png",
    },
  ];

  return (
    <section id="work-experience" className="pb-20">
      <div className="w-full">
        <div className="flex flex-col gap-6">
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              jobTitle={experience.jobTitle}
              previousTitles={experience.previousTitles}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
              skills={experience.skills}
              logoUrl={experience.logoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  jobTitle,
  previousTitles,
  company,
  duration,
  description,
  skills,
  logoUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px"); // Manage the height of the content
  const contentRef = useRef<HTMLDivElement>(null); // Reference to the expandable content

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-dark-bg bg-opacity-90 rounded-lg border border-accent-dark p-6 shadow-lg transition-transform duration-400 cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="grid md:grid-cols-[10rem_auto] gap-x-6">
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent-dark object-cover hidden md:inline"
        />
        <div className="flex flex-col justify-between transform transition-transform duration-500">
          <div className="flex justify-between items-center">
            <div>
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-accent-light">
                  {jobTitle}
                </h3>

                {/* Conditionally render previous titles if they exist */}
                {previousTitles && previousTitles.length > 0 && (
                  <span className="text-sm text-gray-500 flex items-center italic">
                    {/* Render the progression dots between titles */}
                    {previousTitles.map((title, index) => (
                      <span key={index} className="flex items-center">
                        {<span className="mx-2">←</span>}
                        <span>{title}</span>
                      </span>
                    ))}
                  </span>
                )}
              </div>

              <p className="text-2xl text-gray-400">{company}</p>
              <div className="text-sm text-gray-500">{duration}</div>
            </div>
            <div className="text-gray-400">
              {isOpen ? <span className="rotate-180">▲</span> : <span>▼</span>}
            </div>
          </div>

          {/* Expandable Section */}
          <div
            ref={contentRef}
            style={{ height }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-base mt-4 pl-5">
              {description.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-accent-dark text-white rounded-full px-3 py-1 text-sm font-semibold transition duration-300 ease-in-out hover:bg-accent-light cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
