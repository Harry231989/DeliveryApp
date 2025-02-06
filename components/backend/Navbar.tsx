'use client';
import React from 'react';
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  Settings,
  LogOut,
  X,
} from 'lucide-react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeSwitcherBtn from '../ThemeSwitcherBtn';


export default function Navbar({ setShowSidebar, showSidebar }) {
  return (
    <div className='fixed  top-0 left-0 lg:left-72 w-full lg:w-[calc(100%-18rem)] h-16 flex items-center justify-between bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 md:px-6 lg:px-8 z-50 shadow'>
      {/* Left Section: Sidebar Toggle Button */}
     
      <div className='flex items-center space-x-4'>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className='text-[#990100] dark:text-white flex items-center'
        >
          <AlignJustify size={24} />
        </button>
      </div>

      {/* Right Section: Icons & Profile */}
      <div className='flex items-center space-x-6'>
        {/* Theme Switcher */}
        <ThemeSwitcherBtn />

        {/* Notifications Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type='button'
              className='relative inline-flex items-center p-2 bg-transparent rounded-lg'
            >
              <Bell className='text-[#CD0000]' size={24} />
              <div className='absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full'>
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-72 py-2 px-4'>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className='flex items-center space-x-3'>
                <Image
                  src='/Gadafi.png'
                  alt='user profile'
                  width={32}
                  height={32}
                  className='w-8 h-8 rounded-full'
                />
                <div>
                  <p className='font-medium'>New Product all in-stock</p>
                  <p className='text-xs text-gray-500'>27 Jan 2025 - 11:11AM</p>
                </div>
                <button className='ml-auto text-gray-500 hover:text-gray-700'>
                  <X size={16} />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src='/Gadafi.png'
              alt='user profile'
              width={32}
              height={32}
              className='w-8 h-8 rounded-full'
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-40 py-2 px-4'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className='flex items-center space-x-2'>
                <LayoutDashboard className='h-4 w-4' />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className='flex items-center space-x-2'>
                <Settings className='h-4 w-4' />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className='flex items-center space-x-2'>
                <LogOut className='h-4 w-4' />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
