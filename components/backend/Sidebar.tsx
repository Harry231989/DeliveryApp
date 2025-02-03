import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/logo.png"
import { LayoutGrid } from 'lucide-react';


export default function Sidebar() {
  return (
    <div className='fixed top-0 left-0 w-60 h-screen bg-slate-50 dark:bg-slate-700 text-gray-900 dark:text-white shadow-md px-6 py-4'>
      {/* Logo */}
      <Link className='text-2xl font-bold mb-6 block' href='#'>
        <Image src={logo} alt='Korb Delivery' className='w-36' />
      </Link>

      {/* Navigation Links */}
      <div className='space-y-4'>
        <Link href='#' className='flex items-center space-x-3 hover:text-blue-500'>
           <LayoutGrid />
           <span>Dashboard</span>
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Menu
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Customers
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Markets
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Drivers
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Orders
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Staff
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Settings
        </Link>
        <Link href='#' className='block hover:text-blue-500'>
          Online Store
        </Link>
      </div>
    </div>
  );
}
