"use client"
import React from 'react'
import { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function ArrayItemsInput({ setTags, tags, itemTitle}) {

  const [tag, setTag] = useState('');
  const [showTagForm, setShowTagForm] = useState(false);


  function addTag(tag) {
    if (tag.trim() === '') return;
    setTags([...tags, tag]);
    setTag('');
  }

  function removeTag(index) {
    setTags(tags.filter((_, i) => i !== index));
  }

  return (
    <div className='w-full sm:col-span-2 '>
      {showTagForm ? (
        <div className='flex items-center w-full mt-6'>
          <div className='relative w-full'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 21 21'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z'
                />
              </svg>
            </div>
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              type='text'
              id='voice-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Create Tags'
            />
          </div>
          <button
            onClick={() => addTag(tag)}
            type='button'
            className='shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#3681B2] rounded-lg border border-[#3681B2] hover:bg-[#1E658F] focus:ring-4 focus:outline-none focus:ring-[#1E658F] dark:bg-[#3681B2] dark:hover:bg-[#1E658F] dark:focus:ring-[#1E658F]'
          >
            <Plus className='w-4 h-4 me-2' />
            Add {itemTitle}
          </button>
          <button
            type='button'
            onClick={() => setShowTagForm(false)}
            className='flex items-center justify-center p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white transition duration-300 shadow-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-red-600 dark:hover:text-white ml-2'
          >
            <X className='w-5 h-5' />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowTagForm(true)}
          type='button'
          className='flex items-center space-x-2 px-6 py-3 text-white bg-[#3681B2] hover:bg-[#1E658F] rounded-lg transition duration-200 mt-6'
        >
          <Plus />
          <span>Add Items</span>
        </button>
      )}

      <div className='flex flex-wrap gap-4'>
        {tags.map((tag, i) => {
          return (
            <div
              onClick={() => removeTag(i)}
              key={i}
              className='flex space-x-2 items-center bg-[#3681B2] hover:bg-[#1E658F] rounded mt-4 px-4 py-2 cursor-pointer'
            >
              <p> {tag} </p>
              <X className='w-4 h-4' />
            </div>
          );
        })}
      </div>
    </div>
  );
}
