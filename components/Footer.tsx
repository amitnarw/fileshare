import Link from 'next/link';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100/50 dark:bg-gray-900/50 py-8 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 text-center text-gray-700 dark:text-gray-500">
        <div className="grid md:flex justify-center grid-cols-2 md:grid-cols-5 gap-2 md:gap-10 mb-4 px-0 md:px-20">
          <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Contact Us
          </Link>
          <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            FAQ
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} FileShare. All rights reserved.</p>
      </div>
    </footer>
  );
}