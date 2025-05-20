import React from 'react';
import FadeInUp from '../animations/FadeInUp';
import { FileProvider } from '@/presentation/context/FileContext';
import { Button } from '../ui/Button';
import { FiUploadCloud } from 'react-icons/fi';
import { FileItem } from '@/infraestructure/interfaces/FileItem.interface';
import TableFiles from './TableFiles';

export const files: FileItem[] = [
  {
    id: '1',
    name: 'Tech requirements.pdf',
    size: '200 KB',
    mimetype: 'application/pdf',
    dateUpload: 'Jan 4, 2022',
    lasUpdate: 'Jan 4, 2022',
    uploadBy: 'Olivia Rhye',
  },
  {
    id: '2',
    name: 'Dashboard screenshot.jpg',
    size: '720 KB',
    mimetype: 'image/jpeg',
    dateUpload: 'Jan 4, 2022',
    lasUpdate: 'Jan 4, 2022',
    uploadBy: 'Phoenix Baker',
  },
  {
    id: '3',
    name: 'Dashboard prototype recording.mp4',
    size: '16 MB',
    mimetype: 'video/mp4',
    dateUpload: 'Jan 2, 2022',
    lasUpdate: 'Jan 2, 2022',
    uploadBy: 'Lana Steiner',
  },
  {
    id: '4',
    name: 'Dashboard prototype FINAL.fig',
    size: '4.2 MB',
    mimetype: 'application/octet-stream',
    dateUpload: 'Jan 6, 2022',
    lasUpdate: 'Jan 6, 2022',
    uploadBy: 'Demi Wilkinson',
  },
  {
    id: '5',
    name: 'UX Design Guidelines.docx',
    size: '400 KB',
    mimetype:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    dateUpload: 'Jan 8, 2022',
    lasUpdate: 'Jan 8, 2022',
    uploadBy: 'Candice Wu',
  },
  {
    id: '6',
    name: 'Dashboard interaction.framerx',
    size: '12 MB',
    mimetype: 'application/octet-stream',
    dateUpload: 'Jan 6, 2022',
    lasUpdate: 'Jan 6, 2022',
    uploadBy: 'Natali Craig',
  },
  {
    id: '7',
    name: 'App inspiration.png',
    size: '800 KB',
    mimetype: 'image/png',
    dateUpload: 'Jan 4, 2022',
    lasUpdate: 'Jan 4, 2022',
    uploadBy: 'Drew Cano',
  },
];

const Files = () => {
  return (
    <FileProvider>
      <FadeInUp>
        <section className='bg-white rounded-lg shadow-md px-3'>
          <div className='py-4 sm:px-6 sm:py-6 flex justify-between items-center'>
            <div>
              <h3 className='text-lg '>Files uploaded</h3>
            </div>
            <div className='flex items-center gap-2'>
              <Button
                size='md'
                variant='border'
              >
                Download All
              </Button>
              <Button
                size='md'
                variant='purple'
                icon={FiUploadCloud}
              >
                Upload
              </Button>
            </div>
          </div>
          <TableFiles files={files} />
        </section>
      </FadeInUp>
    </FileProvider>
  );
};

export default Files;
