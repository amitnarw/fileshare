'use client';

import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { FileList } from '@/components/FileList';
import { ShareModal } from '@/components/ShareModal';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Upload, Send, Sparkles } from 'lucide-react';

export interface FileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
  uploadProgress: number;
  isUploading: boolean;
}

export default function Home() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleFilesAdded = (newFiles: File[]) => {
    const fileItems: FileItem[] = newFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      file,
      uploadProgress: 0,
      isUploading: true,
    }));

    setFiles(prev => [...prev, ...fileItems]);

    // Simulate upload progress
    fileItems.forEach((fileItem, index) => {
      const interval = setInterval(() => {
        setFiles(prev => prev.map(f => {
          if (f.id === fileItem.id) {
            const newProgress = f.uploadProgress + Math.random() * 15;
            if (newProgress >= 100) {
              clearInterval(interval);
              return { ...f, uploadProgress: 100, isUploading: false };
            }
            return { ...f, uploadProgress: newProgress };
          }
          return f;
        }));
      }, 200 + index * 50);
    });
  };

  const handleFileRemove = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  const hasFiles = files.length > 0;
  const allFilesUploaded = files.every(f => !f.isUploading);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 border border-blue-200/50 dark:border-blue-800/50">
            <Sparkles className="h-4 w-4" />
            Secure & Fast File Sharing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Share files
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              effortlessly
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Upload your files and share them with anyone, anywhere. 
            <br />
            <span className="text-gray-500 dark:text-gray-400">Fast, secure, and beautifully simple.</span>
          </p>
        </div>

        <div className="space-y-8">
          <FileUpload onFilesAdded={handleFilesAdded} />

          {hasFiles && (
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Files</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {files.length} file{files.length !== 1 ? 's' : ''} • {(totalSize / (1024 * 1024)).toFixed(1)} MB total
                    </p>
                  </div>
                </div>

                {allFilesUploaded && (
                  <Button
                    onClick={() => setIsShareModalOpen(true)}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Share Files
                  </Button>
                )}
              </div>

              <FileList files={files} onFileRemove={handleFileRemove} />
            </div>
          )}
        </div>
      </main>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        files={files}
      />
    </div>
  );
}