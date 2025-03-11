import { UploadDropzone } from '@/lib/uploadthing'; // ✅ Ensure correct import
import { Pencil } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';

export default function ImageInput({
  label,
  imageUrl = '',
  setImageUrl,
  className = 'col-span-full',
  endpoint = '', 
}) {
  return (
    <div className={className}>
      <div className='flex justify-between items-center mb-4 '>
        <label
          htmlFor='course-image'
          className='block text-sm font-medium leading-6 text-gray-900 
        dark:text-slate-50 mb-2'
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl('')}
            type='button'
            className='flex items-center justify-center gap-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4'
          >
            <Pencil className='w-5 h-5' />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt='Item image'
          width={1000}
          height={667}
          className='w-full h-64 object-contain'
        />
      ) : (
        <div className='flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-md h-64 ml-38'>
          <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);
              toast.success('Uploaded successfully');
              console.log('Files: ', res);
              console.log('Upload Completed');
            }}
            onUploadError={(error) => {
              toast.error('Image failed');
              console.log(`ERROR! ${error.message}`, error);
            }}
          />
        </div>
      )}
    </div>
  );
}
