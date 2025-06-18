import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 text-gray-900 dark:text-white">
      <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white">
          Go to Homepage
      </Link>
    </div>
  );
}