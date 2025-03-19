import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = [
    "Java",
    "Kotlin",
    "Python",
    "C/C++",
    "JavaScript",
    "SQL",
  ];

  const frameworkSkills = [
    "Spring",
    "Spring Boot",
    "JavaFX",
    "Qt",
    "React",
    "Node.js",
  ];

  const datebaseSkills = ["PostgreSQL", "AWS RDS", "DynamoDB", "MongoDB"];

  const certifications = ["AWS Certified Cloud Practioner"];

  const courseWork = [
    "Data Structures",
    "Computer Algorithms",
    "Software Methodology",
    "Data Management",
    "Data Science",
    "Artificial Intelligence",
    "Computer Architecture",
    "Internet Technology",
    "Numerical Analysis",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
          </div>
          <h3 className="text-3xl font-bold mt-12 mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills
          </h3>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworkSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {datebaseSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold mt-12 mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education
          </h3>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-2">
              Rutgers University (2021-2025)
            </h3>
            <p className="text-md font-medium mb-4">
              Bachelor of Arts, Computer Science
            </p>

            <div className="flex flex-wrap gap-2">
              {courseWork.map((course, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition 
                   hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.A. in Computer Science </strong> - Rutgers
                  University (2021-2025)
                </li>
                <li>
                  Relevant Coursework:
                  <div className="flex flex-wrap gap-2">
                    {courseWork.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at ABC Corp (YYYY - YYYY)
                  </h4>
                  <p>Job tasks, responsibilites, description.</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern at DEF Startups (YYYY)
                  </h4>
                  <p>Job tasks, responsibilites, description.</p>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </RevealOnScroll>
    </section>
  );
};
