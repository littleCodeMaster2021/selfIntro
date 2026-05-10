import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <div className="animate-slide-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl font-bold gradient-text">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-8">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
