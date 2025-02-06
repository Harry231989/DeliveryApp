'use client';
import React, { useState } from 'react';
import data from '../../data.json';

export default function CustomDataTable() {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentDisplayedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

  return (
    <div className='mt-8 px-4'>
      <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>
        Recent Orders
      </h2>

      {/* Responsive Table Container */}
      <div className='p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg'>
        <div className='relative overflow-x-auto max-w-full'>
          <table className='w-full min-w-max text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='p-4'>
                  <div className='flex items-center'>
                    <input
                      id='checkbox-all-search'
                      type='checkbox'
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label htmlFor='checkbox-all-search' className='sr-only'>
                      checkbox
                    </label>
                  </div>
                </th>
                {[
                  'ID',
                  'First Name',
                  'Surname',
                  'Email',
                  'Gender',
                  'Action',
                ].map((header) => (
                  <th key={header} scope='col' className='px-4 sm:px-6 py-3'>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentDisplayedData.map((item, i) => (
                <tr
                  key={i}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                >
                  <td className='w-4 p-4'>
                    <div className='flex items-center'>
                      <input
                        id={`checkbox-${item.id}`}
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        htmlFor={`checkbox-${item.id}`}
                        className='sr-only'
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className='px-4 sm:px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    {item.id}
                  </td>
                  <td className='px-4 sm:px-6 py-4 whitespace-nowrap'>
                    {item.first_name}
                  </td>
                  <td className='px-4 sm:px-6 py-4 whitespace-nowrap'>
                    {item.last_name}
                  </td>
                  <td className='px-4 sm:px-6 py-4 truncate'>{item.email}</td>
                  <td className='px-4 sm:px-6 py-4'>{item.gender}</td>
                  <td className='px-4 sm:px-6 py-4'>
                    <a
                      href='#'
                      className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav
          className='flex flex-wrap justify-between items-center pt-4 text-center md:text-left'
          aria-label='Table navigation'
        >
          {/* Page Info */}
          <span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 w-full md:w-auto'>
            Showing{' '}
            <span className='font-semibold text-gray-500 dark:text-white'>
              {itemStartIndex} - {itemEndIndex}
            </span>{' '}
            of{' '}
            <span className='font-semibold text-gray-500 dark:text-white'>
              {data.length}
            </span>
          </span>

          {/* Pagination Buttons */}
          <ul className='inline-flex flex-wrap justify-center md:justify-start -space-x-px text-sm'>
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === index + 1
                      ? 'text-white bg-blue-600 border border-blue-300 hover:bg-blue-800 dark:bg-[#3681b2] dark:border-[#3681B2] dark:text-slate-900 dark:hover:bg-gray-700'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
