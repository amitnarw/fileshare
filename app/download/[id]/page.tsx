'use client';

import { useState, useEffect, use } from 'react';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, File, Clock, User, Shield, CloudDownload } from 'lucide-react';
import { Header } from '@/components/Header';

interface DownloadPageProps {
  params: {
    id: string;
  };
}

// Mock data for demonstration
const mockTransfers = [
 {
    id: 'abc123def456',
 files: [
      { name: 'presentation.pdf', size: 2.3 * 1024 * 1024, type: 'application/pdf' },
      { name: 'images.zip', size: 15.7 * 1024 * 1024, type: 'application/zip' },
      { name: 'document.docx', size: 1.2 * 1024 * 1024, type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
 ],
 senderEmail: 'john@example.com',
 message: 'Here are the files you requested for the project. Let me know if you need anything else!',
 expiresAt: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 days from now
    downloadCount: 3,
    maxDownloads: 100,
  },
  // Add more mock transfer data here if needed, each within curly braces
];

export default function DownloadPage({ params }: DownloadPageProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Use React.use() to unwrap the params Promise
  const resolvedParams = use(params as any) as { id: string }; // Added type assertion and cast
  const transfer = mockTransfers.find(t => t.id === resolvedParams.id); // Find the transfer data that matches the current ID

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simulate download
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDownloading(false);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Handle case where transfer is not found (e.g., invalid ID)
  if (!transfer) {
    notFound(); // Call notFound() to render the not-found page
  }

  const totalSize = transfer.files.reduce((acc, file) => acc + file.size, 0);
  const daysLeft = Math.ceil((transfer.expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <div className="p-6 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <CloudDownload className="h-10 w-10 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Files shared with you
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Download the files below before they expire
          </p>
        </div>

        <Card className="mb-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-gray-200/50 dark:border-gray-800/50 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  {transfer.files.length} file{transfer.files.length !== 1 ? 's' : ''}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                  Total size: {formatFileSize(totalSize)}
                </CardDescription>
              </div>
              
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                {isDownloading ? 'Downloading...' : 'Download All'}
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {transfer.files.map((file, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                    <File className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-lg">{file.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">{formatFileSize(file.size)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {transfer.message && (
          <Card className="mb-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-gray-200/50 dark:border-gray-800/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3 text-gray-900 dark:text-white">
                <User className="h-6 w-6" />
                Message from sender
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{transfer.message}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-3 font-medium">
                From: {transfer.senderEmail}
              </p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-gray-200/50 dark:border-gray-800/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-950/30 rounded-2xl">
                  <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">Expires in</p>
                  <p className="text-gray-600 dark:text-gray-300">{daysLeft} days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-gray-200/50 dark:border-gray-800/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-950/30 rounded-2xl">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">Downloads</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {transfer.downloadCount} of {transfer.maxDownloads}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}