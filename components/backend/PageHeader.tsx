import React from 'react'
import Heading from './Heading'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function PageHeader({ heading, linkTitle, href }) {
  return (
    <div className='flex justify-between py-4 mb-4'>
      <Heading title={heading} />
      <Link
        className='text-white bg-[#3681B2] hover:bg-[#1E658F] dark:bg-[#3681B2] dark:hover:bg-[#1E658F] focus:ring-4 focus:outline-none  font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center  me-2 space-x-3'
        href={href}
      >
        <Plus />
        <span> {linkTitle} </span>
      </Link>
    </div>
  );
}
