import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  register: any;
  errors: Record<string, any>;
  isRequired?: boolean;
  type?: string;
  className?: string;
  defaultValue?: string;
}

export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = 'text',
  className = 'w-full',
  defaultValue = '',
}: TextInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          {...register(name, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className='block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-[#3681B2] focus:ring-[#1E658F] sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100'
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[name] && (
          <span className=' text-sm text-red-600'>{label} is required</span>
        )}
      </div>
    </div>
  );
}
