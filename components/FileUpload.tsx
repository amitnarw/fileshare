'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, AlertCircle, CloudUpload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface FileUploadProps {
  onFilesAdded: (files: File[]) => void;
}

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_TOTAL_SIZE = 200 * 1024 * 1024; // 200MB

export function FileUpload({ onFilesAdded }: FileUploadProps) {
  const [error, setError] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    setError('');

    if (rejectedFiles.length > 0) {
      const errors = rejectedFiles.map(f => f.errors[0]?.message).join(', ');
      setError(errors);
      return;
    }

    const totalSize = acceptedFiles.reduce((acc, file) => acc + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
      setError('Total file size exceeds 200MB limit');
      return;
    }

    onFilesAdded(acceptedFiles);
  }, [onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    maxSize: MAX_FILE_SIZE,
    accept: {
      'image/*': [],
      'video/*': [],
      'audio/*': [],
      'application/pdf': [],
      'application/msword': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
      'application/vnd.ms-excel': [],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [],
      'text/*': [],
      'application/zip': [],
      'application/x-rar-compressed': [],
    },
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-3xl p-16 text-center transition-all duration-500 cursor-pointer group
          ${isDragActive 
            ? 'border-blue-400 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 scale-[1.02] shadow-2xl' 
            : 'border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 backdrop-blur-sm'
          }
        `}
      >
        <input {...getInputProps()} />
        
        <div className={`transition-all duration-500 ${isDragActive ? 'scale-110' : 'group-hover:scale-105'}`}>
          <div className="relative p-6 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <CloudUpload className={`h-10 w-10 text-white transition-all duration-500 ${
              isDragActive ? 'scale-110 rotate-12' : 'group-hover:scale-110'
            }`} />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {isDragActive ? 'Drop your files here' : 'Upload your files'}
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Drag and drop files here, or click to browse your device
          </p>
          
          <Button 
            onClick={open}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <File className="h-5 w-5 mr-3" />
            Choose Files
          </Button>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Max 50MB per file
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              200MB total limit
            </div>
          </div>
        </div>
      </div>

      {error && (
        <Alert className="mt-6 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <AlertDescription className="text-red-800 dark:text-red-300">
            {error}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}