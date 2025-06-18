import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 py-12">
      <main className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-8 space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your information when you use our file sharing service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Collection
            </h2>
            <p>
              We collect information that you provide directly to us when you use our service, such as when you upload files or provide contact details. We may also collect usage data automatically.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal Identification Information (Name, Email Address - if provided)</li>
              <li>File Metadata (File names, sizes, types)</li>
              <li>Usage Data (How you interact with the service)</li>
              <li>Device Information (Browser type, operating system)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our service</li>
              <li>To improve, personalize, and expand our service</li>
              <li>To communicate with you</li>
              <li>To detect and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Security
            </h2>
            <p>
              We implement security measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p>
              We may use third-party services to operate and improve our service. These third parties may have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at [Your Contact Email Address].
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}