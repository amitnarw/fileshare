'use client';

import { FileItem } from '@/app/page';
import { useEffect, useState } from 'react';
import { File, Image, Video, Music, FileText, Archive, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface FileListProps {
  files: FileItem[];
  onFileRemove: (fileId: string) => void;
}

function getFileIcon(type: string) {
  if (type.startsWith('image/')) return Image;
  if (type.startsWith('video/')) return Video;
  if (type.startsWith('audio/')) return Music;
  if (type.includes('pdf') || type.includes('document') || type.includes('text')) return FileText; 
  if (type.includes('zip') || type.includes('rar')) return Archive;
  return File;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function FileList({ files, onFileRemove }: FileListProps) {
  const [filePreviews, setFilePreviews] = useState<{ id: string; preview: string | null }[]>([]);

  useEffect(() => {
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreviews(prev => [...prev.filter(p => p.id !== file.id), { id: file.id, preview: reader.result as string }]);
        };
        reader.readAsDataURL(file.file);
      } else {
        setFilePreviews(prev => [...prev.filter(p => p.id !== file.id), { id: file.id, preview: null }]);
      }
    });
  }, [files]);
  return (
    <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 p-4 sm:p-8">
 
      <div className="space-y-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-all duration-200 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              {file.type.startsWith('image/') && filePreviews.find(p => p.id === file.id)?.preview ? (
                <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img
                    src={filePreviews.find(p => p.id === file.id)?.preview || ''}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                  {(() => {
                    const IconComponent = getFileIcon(file.type);
                    return <IconComponent className="h-5 w-5 text-gray-600 dark:text-gray-400" />;
                  })()}
                </div>
              )}

              <div className="min-w-0 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 items-center">
                <h4 className="font-semibold text-gray-900 dark:text-white truncate">{file.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">{formatFileSize(file.size)}</p>
              </div>
            </div>

            {file.isUploading ? (
              <div className="w-24 ml-4">
                <Progress value={file.uploadProgress} className="h-2" />
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium text-right">
                  {Math.round(file.uploadProgress)}%
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2 ml-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">Complete</p>
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFileRemove(file.id)}
              className="text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-full p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}