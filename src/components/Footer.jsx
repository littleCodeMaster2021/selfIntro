import { personalInfo } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
