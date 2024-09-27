import React, { useState } from "react";

interface WorkExperienceCardProps {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

const WorkExperience: React.FC = () => {
  const workExperiences = [
    {
      jobTitle: "Frontend Developer",
      company: "Company A",
      duration: "Jan 2020 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      jobTitle: "Backend Developer",
      company: "Company B",
      duration: "Jan 2018 - Dec 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      skills: ["Node.js", "Express", "MongoDB", "REST API"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Company C",
      duration: "Feb 2016 - Dec 2017",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis ut consectetur tincidunt, nunc elit varius nisi, in tincidunt metus elit at turpis.",
      skills: ["React", "Node.js", "GraphQL", "Docker"],
    },
  ];

  return (
    <section id="work-experience" className="pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              jobTitle={experience.jobTitle}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  jobTitle,
  company,
  duration,
  description,
  skills,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-dark-bg bg-opacity-90 rounded-lg border border-accent-dark p-6 shadow-lg transform transition-transform duration-500 hover:scale-[0.98] ${
        isOpen ? "max-h-full" : "max-h-48"
      } overflow-hidden grid grid-cols-[10%_auto] p-x-8 gap-x-6 cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <img
        src="assets/profile.jpeg" // Replace this with the actual path or logo prop
        alt={`${company} logo`}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent-dark object-cover"
      />
      <div>
        {/* Job Title and Company */}
        <div
          className="flex justify-between items-center"
        >
          <div>
            <h3 className="text-xl font-bold text-accent-light mb-1">
              {jobTitle}
            </h3>
            <p className="text-md text-gray-400">{company}</p>
            <div className="text-sm text-gray-500">{duration}</div>
          </div>

          {/* Icon to show collapse/expand */}
          <div className="text-gray-400">
            {isOpen ? (
              <span className="transform rotate-180">▲</span> // Up arrow
            ) : (
              <span>▼</span> // Down arrow
            )}
          </div>
        </div>

        {/* Expandable Section */}
        {isOpen && (
          <>
            <p className="text-gray-300 text-base mt-4">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-accent-dark text-white rounded-full px-3 py-1 text-sm font-semibold transition duration-300 ease-in-out hover:bg-accent-light"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
