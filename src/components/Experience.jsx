import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative mb-12 last:mb-0 md:flex ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 mt-6 ring-4 ring-white dark:ring-gray-950" />

                <div className="ml-8 md:ml-0 md:w-1/2">
                  <div className={`card ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
