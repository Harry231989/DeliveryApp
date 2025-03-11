import React from 'react'
import { Download, Search, Trash2 } from 'lucide-react';

export default function TableActions() {
  return (
    <div className='flex justify-between py-8 px-12 bg-[#E6EAF1] dark:bg-slate-700 rounded-lg items-center gap-12 '>
      <button className='relative inline-flex items-center justify-center py-3 px-4 space-x-3 text-base font-medium text-gray-900 rounded-lg group dark:bg-[#3681B2]  bg-[#1E658F] hover:bg-[#3681B2] hover:dark:bg-[#1E658F]  hover:text-white border border-[#E6EAF1]  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
        <Download />
        <span>Export</span>
      </button>
      {/* Search */}
      <div className=' flex-grow  '>
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>
        <div className='relative '>
          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <Search className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </div>
          <input
            type='text'
            id='table-search'
            className='block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-[#E6EAF1] focus:border-[#E6EAF1] bg-[#E6EAF1] border-[#E6EAF1]  bg:placeholder-gray-300 dark:text-white dark:focus:ring-[#E6EAF1] dark:focus:border-[#E6EAF1] w-full'
            placeholder='Search for items'
          />
        </div>
      </div>
      {/* Delete */}
      <button className='flex items-center space-x-2 bg-[#E6EAF1] border-2 border-[#990100] text-[#990100] hover:bg-[#990100] hover:text-white transition-all duration-300 rounded-lg px-6 py-3 shadow-md'>
        <Trash2 className='w-5 h-5' />
        <span className='font-semibold'>Bulk Delete</span>
      </button>
    </div>
  );
}
