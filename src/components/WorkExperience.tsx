import React, { useEffect, useRef, useState } from "react";

interface WorkExperienceCardProps {
  jobTitle: string;
  company: string;
  duration: string;
  summaryText?: string;
  description: string[];
  skills: string[];
  logoUrl: string;
  previousTitles?: string[]; // Optional previous titles
}

const WorkExperience: React.FC = () => {
  const workExperiences: WorkExperienceCardProps[] = [
    {
      jobTitle: "Vice President",
      previousTitles: ["Events Director", "Events Officer"],
      company: "Monash Association of Coding (MAC)",
      duration: "Jan 2024 - Present",
      summaryText: "Building the biggest coding club in Australia",
      description: [
        "At MAC it is our vision to provide students with the resources to succeed in the tech industry, and to foster a community of like-minded individuals who are passionate about technology.",
        "In my role of Vice President, I am responsible for overseeing the operations of the club, helping manage a team of executive directors to ensure that all moving parts of the club are running smoothly.",
        "I am also responsible for the strategic direction of the club, and work closely with the President to ensure that the club is meeting its goals; shaping the vision for the future of MAC.",
        "In my role as Events Director, I was in charge of organising and overseeing the operations of all events run by MAC. This included managing a team of Events Officers and ensuring that all events were run smoothly and professionally.",
        "As Events Director, I was directly responsible for the success of 30+ technical, non-technical and social events. My highlights include organising our first End of Exams (EOX) party, which attracted over 200 students, and our keyboard (MACropad) building workshop, which was a huge logistical and technical challenge, but was a huge success.",
      ],
      skills: ["Leadership", "Management", "Event Planning"],
      logoUrl: "assets/MAC-logo.png",
    },
    {
      jobTitle: "Software Engineering Intern",
      company: "Monash eSolutions",
      duration: "Jan 2024 - Jul 2024",
      summaryText:
        "Working in the Virtual and Augmented Reality Services (VARS) team as a part of Monash's Industry Based Learning (IBL) program",
      description: [
        "During my 23-week IBL placement at eSolutions, I was responsible for the development of a desktop application that aided in the rehabilitation of substance abuse disorder patients.",
        "I developed strong technical skills in desktop application development, including TypeScript, React, and Electron. I also developed strong communication and teamwork skills, working closely with our client to deliver a high-quality product.",
        "Additionally, I was responsible for the management of our team's agile workflow, ensuring that we were able to deliver a high-quality product on time and within scope.",
        "I helped develop our documentation and strategy surrounding our agile foundations, by observing and learning from other teams' agile practices within eSolutions.",
        "Throughout my placement, I also maintained documentation surrounding my time at eSolutions, including daily logs, a weekly reflection, and a final report and presentation for the IBL program team.",
      ],
      skills: ["TypeScript", "React", "Electron", "Agile Methodologies"],
      logoUrl: "assets/monashfit-logo.jpeg",
    },
    {
      jobTitle: "SEE Program - Software Engineering Track",
      company: "Jane Street",
      duration: "Jul 2024",
      summaryText: 
        "One of 25 students selected to participate in Jane Street's SEE Program in their Hong Kong office during Winter of 2024",
      description: [
        "Learned about the inner workings of how quantitative trading firms operate, and how they use technology to make decisions in the market.",
        "Developed a strong understanding of the role of a market maker in the economy, through comprehensive workshops from experienced traders.",
        "Put my new skills to test in a trading competition, where I was able to apply my knowledge of trading systems to make decisions in a simulated trading environment, in competition against other top students from across Asia-Pacific.",
        "Had the opportunity to explore a new city and culture, and meet other like-minded students from across the region.",
      ],
      skills: ["Trading", "Quantitative Finance"],
      logoUrl: "assets/janestreet-logo.png",
    },
    {
      jobTitle: "Teaching Associate",
      company: "Monash University - Faculty of Information Technology",
      duration: "Feb 2023 - Dec 2023",
      summaryText:
        "Instructing for FIT1045 - Introduction to Programming in Python",
      description: [
        "Acted as a mentor to students, providing guidance on how to succeed in the unit and in their studies more broadly. This was my favourite part of the role, as I was able to relate to the students and provide them with advice that I wish I had received when I was in their position, especially as I was a second-year student at the time.",
        "Delivered content for weekly applied sessions, including live coding demonstrations and interactive activities to help students develop their programming skills.",
        "Acted as a assistant during weekly workshop sessions, helping students debug their code and understand the course material.",
        "Held weekly consultation hours, where students could come to me for help with their assignments and general issues with the content.",
        "Held assignment interviews, where I interviewed students about their code to ensure they understood the content, and that their submissions upheld academic integrity.",
        "Marked student assignments, providing detailed feedback to students to help them improve their skills for the future.",
      ],
      skills: ["Python", "Teaching", "Interviewing", "Marking"],
      logoUrl: "assets/monash-logo.jpg",
    },
    {
      jobTitle: "Database Administration Intern",
      company: "Mannix College",
      duration: "Sep 2022 - Mar 2023",
      summaryText:
        "Managing the college's database and CRM systems",
      description: [
        "Upheld the integrity of the college's Customer Relationship Management (CRM) database systems, ensuring that all data was accurate and up-to-date, without duplicate entries.",
        "Developed strong skills in Microsoft Excel, using it to manage and manipulate large datasets.",
        "Worked closely with the college's management team to ensure that the database systems were meeting their needs, and that they were able to access the data they required.",
        "Helped organise events for Old Collegians, including the annual Gryphon Gala, where I was responsible for managing the guest list and ensuring that all attendees were accounted for.",
      ],
      skills: ["Microsoft Excel", "Customer Relationship Management (CRM)"],
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
              summaryText={experience.summaryText}
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
  summaryText,
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
      className={`bg-dark-bg bg-opacity-90 rounded-xl border border-accent-light p-6 shadow-lg transition-transform duration-400 cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="grid md:grid-cols-[10rem_auto] gap-x-6">
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent-dark object-cover hidden md:inline hover:cursor-default"
        />
        <div className="flex flex-col justify-between transform transition-transform duration-500">
          <div className="flex justify-between items-center">
            <div>
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-accent-light min-w-fit mr-6 md:mr-2">
                  {jobTitle}
                </h3>

                {/* Conditionally render previous titles if they exist */}
                {previousTitles && previousTitles.length > 0 && (
                  <span className="text-sm text-gray-500 flex italic">
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
              <div className="text-sm text-gray-500 italic mb-6">
                {duration}
              </div>
            </div>
            <div className="text-gray-400">
              {isOpen ? <span className="rotate-180">▲</span> : <span>▼</span>}
            </div>
          </div>

          <p className="text-base  font-semibold">{summaryText}</p>

          {/* Expandable Section */}
          <div
            ref={contentRef}
            style={{ height }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <ul className="list-disc space-y-1 mt-1 text-gray-300 text-base pl-5">
              {description.map((item, index) => (
                <li key={index} className="leading">
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
