// app/about/page.tsx
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 text-gray-900 dark:text-white px-4 py-12">
      <main className="container mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 border border-blue-200/50 dark:border-blue-800/50">
          <Sparkles className="h-4 w-4" />
          Our Story
        </div>

        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-8 leading-tight">
          About FileShare
        </h1>

        <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
          <p>
            FileShare was created with a simple goal: to make file sharing
            effortless, fast, and secure for everyone. In a world where
            sharing digital information is a daily necessity, we believe
            the process should be as straightforward and reliable as possible.
          </p>
          <p>
            Our platform is designed with user experience at its core.
            Whether you're sending a single document or a collection of
            memories, FileShare provides a beautiful and intuitive interface
            that guides you through the process in just a few clicks.
          </p>
          <p>
            Security is paramount. We utilize robust measures to ensure
            your files are protected during transfer and storage.
            We're committed to providing a service you can trust for both
            personal and professional use.
          </p>
          <p>
            Thank you for choosing FileShare. We hope our service makes your
            digital life a little bit easier.
          </p>
        </div>
      </main>
    </div>
  );
}