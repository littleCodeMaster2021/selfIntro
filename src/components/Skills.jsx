import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="card">
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
