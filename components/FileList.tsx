'use client';

import { FileItem } from '@/app/page';
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
  return (
    <div className="space-y-4">
      {files.map((file) => {
        const IconComponent = getFileIcon(file.type);
        
        return (
          <div
            key={file.id}
            className="flex items-center gap-5 p-5 bg-gray-50/50 dark:bg-gray-800/30 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/30 transition-all duration-200 backdrop-blur-sm"
          >
            <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <IconComponent className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white truncate pr-4 text-lg">
                  {file.name}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap font-medium">
                  {formatFileSize(file.size)}
                </span>
              </div>
              
              {file.isUploading ? (
                <div className="space-y-2">
                  <Progress value={file.uploadProgress} className="h-2" />
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Uploading... {Math.round(file.uploadProgress)}%
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Upload complete
                  </p>
                </div>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFileRemove(file.id)}
              className="text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}