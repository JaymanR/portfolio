import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/** Projects  Section */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              {/** Project 1 */}
              <h3 className="text-xl font-bold mb-2">
                Project Management Application
              </h3>
              <p className="text-gray-400 mb-4">
                A Spring-Boot based web application designed to help users
                manage projects efficiently. It provides features like project
                creation, task assignment, and progress tracking. Built with
                Java, Spring Boot, and Thymeleaf, the app integrates RESTful
                APIs and uses a PostgreSQL database for secure and efficient
                data management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Java",
                  "Spring",
                  "Spring Boot",
                  "PostgreSQL",
                  "Thymeleaf",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JaymanR/project-management-application"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              {/** Project 2 */}
              <h3 className="text-xl font-bold mb-2">
                Train Reservation System
              </h3>
              <p className="text-gray-400 mb-4">
                A full-stack web application for a railway booking system.
                Supports customer reservations, train schedule management, and
                an employee portal for handling bookings, lookups and customer
                service. Connected to a MySQL database to efficiently manage
                users, reservations, and train data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "MySQL", "JSP", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/hhenry99/cs336Train"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              {/** Project 3 */}
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                The website you are viewing right now! A personal portfolio
                website showcasing my projects and skills, built with React and
                Tailwind CSS. Hosted on GitHub Pages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "TailwindCSS", "Vite"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JaymanR/portfolio"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              {/** Project 4 */}
              <h3 className="text-xl font-bold mb-2">
                Photo Management Application
              </h3>
              <p className="text-gray-400 mb-4">
                A multi-user photo management application for desktop, enabling
                users to organize, tag and view photos across multiple albums.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "JavaFX", "FXML"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              {/** Project 5 */}
              <h3 className="text-xl font-bold mb-2">Pi Dash</h3>
              <p className="text-gray-400 mb-4">
                A python based desktop application connecting to a web interface
                on a raspberry pi to allow remote hotkey execution and
                management via a touchscreen.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "JavaScript", "Qt", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JaymanR/pi-dash"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              {/** Project 6 */}
              <h3 className="text-xl font-bold mb-2">Connections Bot</h3>
              <p className="text-gray-400 mb-4">
                A discord bot that utilizes the discord.js library to track NYT
                Connections game submissions in text chat. Provides commands
                such as score tracking and server leaderboards. Stores data in a
                MongoDB Atlas database.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "MobgoDb"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JaymanR/connections-bot"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
