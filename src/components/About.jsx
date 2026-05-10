import { personalInfo } from '../data';

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="max-w-3xl mx-auto">
          <div className="card">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
