import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 text-gray-900 dark:text-white py-12 px-4">
      <main className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our service.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          <AccordionItem
            value="item-1"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">How do I upload files?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">To upload files, simply drag and drop them into the designated area on the homepage, or click the &quot;Choose Files&quot; button to select files from your device.</p>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">Is there a limit on file size?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">Yes, there is a limit of 50MB per individual file and a total limit of 200MB for all files in a single transfer.</p>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">How long are my files available for download?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">Files are typically available for download for 7 days from the time of upload. After this period, they will be automatically deleted.</p>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">How secure is my data?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">We take data security seriously. Files are transferred and stored securely. Please refer to our Privacy Policy for more details on data handling.</p>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">Can I share files with multiple people?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">Yes, the download link generated after uploading can be shared with anyone you wish to give access to the files.</p>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">Do I need an account to use the service?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">No, you do not need to create an account to upload or download files. The service is designed for quick and easy sharing.</p>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">
              What file types are supported?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">You can upload and share any file type. There are no restrictions on the file extensions.</p>
            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="item-8" className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-6 mb-6">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">
              What happens after my files expire?
            </AccordionTrigger>

            <AccordionContent>
              After the expiration date, the files and their associated download link are permanently deleted from our servers. They cannot be recovered.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}