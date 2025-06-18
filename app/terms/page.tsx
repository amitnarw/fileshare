export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 text-gray-900 dark:text-white">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using our service.
          </p>
        </div>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the FileShare website and service, you agree to be bound by these Terms of Service and all terms incorporated by reference. If you do not agree to all of these terms, do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              2. User Responsibilities
            </h2>
            <p>
              You are responsible for your use of the service, including the files you upload and share. You agree not to use the service for any illegal or unauthorized purposes.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Do not upload or share files that are illegal, harmful, or infringe on intellectual property rights.</li>
              <li>Do not use the service to distribute viruses or other malicious code.</li>
              <li>Do not attempt to gain unauthorized access to the service or other users' data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              3. Intellectual Property
            </h2>
            <p>
              You retain all rights to the files you upload and share through the service. By using the service, you grant us a limited license to host and share your files according to your instructions.
            </p>
            <p className="mt-4">
              The FileShare service itself, including its design, code, and content (excluding user-uploaded files), is owned by us and protected by intellectual property laws.
            </p>
          </section>

          {/* Add more sections for other terms and conditions */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              4. Disclaimer of Warranties
            </h2>
            <p>
              The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or secure.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              5. Limitation of Liability
            </h2>
            <p>
              We will not be liable for any damages arising from your use of the service.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              6. Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Your continued use of the service after changes means you accept the new terms.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}