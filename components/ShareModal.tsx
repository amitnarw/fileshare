'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileItem } from '@/app/page';
import { Copy, Mail, Link, Check, Send, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  files: FileItem[];
}

export function ShareModal({ isOpen, onClose, files }: ShareModalProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Generate a mock download link
  const downloadLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/download/abc123def456`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadLink);
      setIsLinkCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setIsLinkCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const handleSendEmail = async () => {
    if (!email.trim()) {
      toast.error('Please enter an email address');
      return;
    }

    setIsSending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSending(false);
    toast.success('Email sent successfully!');
    onClose();
  };

  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  const formatSize = (bytes: number) => (bytes / (1024 * 1024)).toFixed(1);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-gray-200/50 dark:border-gray-800/50">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Share Your Files
          </DialogTitle>
        </DialogHeader>

        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
          <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
            {files.length} file{files.length !== 1 ? 's' : ''} • {formatSize(totalSize)} MB total
          </p>
        </div>

        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <TabsTrigger value="email" className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="link" className="flex items-center gap-2 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              <Link className="h-4 w-4" />
              Link
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-6 mt-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Send to email</Label>
              <Input
                id="email"
                type="email"
                placeholder="recipient@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message (optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a personal message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>

            <Button
              onClick={handleSendEmail}
              disabled={isSending}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold"
            >
              <Send className="h-4 w-4 mr-2" />
              {isSending ? 'Sending...' : 'Send Email'}
            </Button>
          </TabsContent>

          <TabsContent value="link" className="space-y-6 mt-6">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Download link</Label>
              <div className="flex gap-3">
                <Input
                  value={downloadLink}
                  readOnly
                  className="font-mono text-sm rounded-xl border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                />
                <Button
                  onClick={handleCopyLink}
                  variant="outline"
                  className="px-4 rounded-xl border-gray-300 dark:border-gray-600"
                >
                  {isLinkCopied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
                🔒 This link will expire in 7 days and can be downloaded up to 100 times.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}