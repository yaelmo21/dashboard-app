'use client';
import { createContext, useContext, useState } from 'react';

type FileContextType = {
  selectedFiles: string[];
  toggleFile: (id: string) => void;
  clearSelection: () => void;
};

const FileContext = createContext<FileContextType | null>(null);

export const useFileContext = () => {
  const ctx = useContext(FileContext);
  if (!ctx) throw new Error('useFileContext must be used inside FileProvider');
  return ctx;
};

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const toggleFile = (id: string) => {
    setSelectedFiles((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  };

  const clearSelection = () => setSelectedFiles([]);

  return (
    <FileContext.Provider value={{ selectedFiles, toggleFile, clearSelection }}>
      {children}
    </FileContext.Provider>
  );
};
