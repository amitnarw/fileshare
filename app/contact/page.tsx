import React from 'react';
export default function ContactPage() {
  return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 text-gray-900 dark:text-white pt-16"> {/* Added pt-16 to account for the fixed header height */}
      <main className="container mx-auto px-4 py-12 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Have questions, feedback, or need support? Get in touch with us.
        </p>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>support@yourfilesharingapp.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>123 FileShare Lane, Cloud City, 98765</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <p>@YourFileShareApp (Twitter, Facebook, etc.)</p>
          </div>
        </div>
      </main>
    </div>
  );
}