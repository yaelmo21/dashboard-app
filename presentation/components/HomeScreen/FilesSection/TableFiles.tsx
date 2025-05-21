'use client';
import React, { FC } from 'react';
import { FileItem } from '@/infraestructure/interfaces/FileItem.interface';
import CheckBox from '../../ui/forms/CheckBox';
import TableFileItem from './TableFileItem';
import { useFileContext } from '@/presentation/context/FileContext';

interface TableFilesProps {
  files: FileItem[];
}

const Thead: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <th
      scope='col'
      className={`text-left text-[12px] font-normal text-muted py-3.5 pr-4 pl-3 ${className}`}
    >
      {children}
    </th>
  );
};

const TableFiles: FC<TableFilesProps> = ({ files }) => {
  const { toggleFile, selectedFiles, clearSelection } = useFileContext();
  const handleCheckAll = (value: boolean) => {
    if (!value) {
      clearSelection();
      return;
    }

    if (selectedFiles.length > 0) {
      clearSelection();
    }
    files.forEach((file) => toggleFile(file.id));
  };
  return (
    <div className='flow-root'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <table className='min-w-full divide-y divide-gray-300'>
            <thead>
              <tr>
                <Thead className='flex gap-2'>
                  <CheckBox
                    checked={selectedFiles.length === files.length}
                    onChange={handleCheckAll}
                  />
                  <span>File Name</span>
                </Thead>

                <Thead>File size</Thead>
                <Thead>Date uploaded</Thead>
                <Thead>Last updated</Thead>
                <Thead>Uploaded by</Thead>
                <Thead className='relative py-3.5 pr-4 pl-3 sm:pr-3'>
                  <span className='sr-only'>Edit</span>
                </Thead>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {files.map((file) => (
                <TableFileItem
                  key={file.id}
                  {...file}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableFiles;
