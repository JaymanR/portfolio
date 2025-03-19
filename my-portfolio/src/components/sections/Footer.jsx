import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Let's Connect!
        </h2>

        <div className="flex justify-center space-x-6 mb-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jayman-rana-335312196"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-400 transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JaymanR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-400 transition"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>

          {/* Email */}
          <a
            href="mailto:jaymanrana@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-400 transition"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Jayman Rana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
