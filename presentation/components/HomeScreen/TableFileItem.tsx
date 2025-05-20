'use client';
import React, { FC } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import CheckBox from '../ui/forms/CheckBox';
import { FileItem } from '@/infraestructure/interfaces/FileItem.interface';
import { HiOutlineFilm, HiOutlinePhotograph } from 'react-icons/hi';
import { SiFigma } from 'react-icons/si';
import { HiOutlineDocument } from 'react-icons/hi2';
import { FiFramer } from 'react-icons/fi';
import { useFileContext } from '@/presentation/context/FileContext';

const IconFile = (mimetype: string, name?: string) => {
  if (mimetype === 'application/pdf' || mimetype === 'application/x-pdf') {
    return HiOutlineDocument;
  }

  if (mimetype.includes('image/')) {
    return HiOutlinePhotograph;
  }

  if (mimetype.includes('video/')) {
    return HiOutlineFilm;
  }

  if (mimetype === 'application/octet-stream' && name?.endsWith('.fig')) {
    return SiFigma;
  }

  if (
    mimetype ===
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return HiOutlineDocument;
  }

  if (mimetype === 'application/octet-stream' && name?.endsWith('.framerx')) {
    return FiFramer;
  }

  return HiOutlineDocument;
};

const TableFileItem: FC<FileItem> = ({
  id,
  name,
  size,
  mimetype,
  dateUpload,
  lasUpdate,
  uploadBy,
}) => {
  const { toggleFile, selectedFiles } = useFileContext();
  const isChecked = selectedFiles.includes(id);
  const FileIcon = IconFile(mimetype, name);
  return (
    <tr className='even:bg-secondary'>
      <td className='py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3 flex gap-3 items-center'>
        <CheckBox
          checked={isChecked}
          onChange={(value) => {
            toggleFile(id);
          }}
        />
        <div className='flex gap-2 items-center'>
          <div className='rounded-full bg-alternative-muted p-2'>
            <FileIcon className='w-4 h-4 text-alternative' />
          </div>
          <div className='flex flex-col gap-1'>
            <span>{name}</span>
            <span className='text-muted text-xs font-normal'>{size}</span>
          </div>
        </div>
      </td>
      <td className='px-3 py-4 text-sm whitespace-nowrap text-muted hidden md:table-cell'>
        {size}
      </td>
      <td className='px-3 py-4 text-sm whitespace-nowrap text-muted hidden lg:table-cell'>
        {dateUpload}
      </td>
      <td className='px-3 py-4 text-sm whitespace-nowrap text-muted hidden lg:table-cell'>
        {lasUpdate}
      </td>
      <td className='px-3 py-4 text-sm whitespace-nowrap text-muted hidden lg:table-cell'>
        {uploadBy}
      </td>
      <td className='px-3 py-4 text-sm whitespace-nowrap text-gray-500 hidden lg:table-cell'>
        <button>
          <FaEllipsisV className='text-muted w-3 h-3 ' />
        </button>
      </td>
    </tr>
  );
};

export default TableFileItem;
