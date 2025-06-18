import Link from 'next/link';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100/50 dark:bg-gray-900/50 py-8 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 text-center text-gray-700 dark:text-gray-300">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-2 md:space-y-0 mb-4">
          <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Contact Us
          </Link>
          <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors text-center">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors text-center">
            Terms of Service
          </Link>
          <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white transition-colors text-center">
            FAQ
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} FileShare. All rights reserved.</p>
      </div>
    </footer>
  );
}