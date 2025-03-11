import React from 'react'

export default function ToggleInput({
    label, 
    name, 
    trueTitle, 
    falseTitle, 
    register, 
    className = "sm:col-span-2 flex"

}) {
  return (
    <div className='w-full'>
      <div className='w-full sm:w-1/2'>
        <h2 className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 mt-4'>
        {label}
        </h2>
      </div>
      <div className='w-full sm:w-1/2'>
        <label className='relative inline-flex items-center cursor-pointer'>
          <input
            {...register(`${name}`)}
            type='checkbox'
            defaultChecked= {true}
            className='sr-only peer'
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1E658F]"></div>
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            {name ? `${trueTitle}` : `${falseTitle}`}
          </span>
        </label>
      </div>
    </div>
  );
}
