'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import {
  Boxes,
  Car,
  ChevronDown,
  ChevronRight,
  FileUser,
  Globe,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  Shuffle,
  Slack,
  Store,
  Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';


export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathName = usePathname();
  const sidebarLinks = [
    {
      title: 'Customers',
      icon: Users,
      href: '/dashboard/customers',
    },
    {
      title: 'Markets',
      icon: Store,
      href: '/dashboard/markets',
    },
    {
      title: 'Drivers',
      icon: Car,
      href: '/dashboard/drivers',
    },
    {
      title: 'Orders',
      icon: Shuffle,
      href: '/dashboard/orders',
    },
    {
      title: 'Staffs',
      icon: FileUser,
      href: '/dashboard/staffs',
    },
    {
      title: 'Settings',
      icon: Settings,
      href: '/dashboard/settings',
    },
    {
      title: 'Online Store',
      icon: Globe,
      href: '/',
    },
  ];

  const menuLinks = [
    {
      title: 'Products',
      icon: Boxes,
      href: '/dashboard/products',
    },
    {
      title: 'Categories',
      icon: LayoutList,
      href: '/dashboard/categories',
    },
    {
      title: 'Attributes',
      icon: SendToBack,
      href: '/dashboard/attributes',
    },
    {
      title: 'Coupons',
      icon: ScanSearch,
      href: '/dashboard/coupons',
    },
    {
      title: 'store sliders',
      icon: MonitorPlay,
      href: '/dashboard/sliders',
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={
        showSidebar
          ? 'sm:block mt-10 sm:mt-0 fixed top-0 left-0 w-72 h-screen bg-slate-50 dark:bg-slate-700 bg-white  shadow-md px-6 py-4 overflow-y-scroll'
          : 'mt-20 sm:mt-0 hidden sm:block   fixed top-0 left-0 w-72 h-screen bg-slate-50 dark:bg-slate-700 bg-white  shadow-md px-6 py-4 overflow-y-scroll'
      }
    >
      {/* Logo */}
      <Link
        onClick={() => setShowSidebar(false)}
        className='text-2xl font-bold mb-6 block'
        href='/dashboard'
      >
        <Image src={logo} alt='Korb Delivery' className='w-36' />
      </Link>

      {/* Navigation Links */}
      <div className='space-y-4'>
        <Link
          onClick={() => setShowSidebar(false)}
          href='/dashboard'
          className={
            pathName === '/dashboard'
              ? 'flex items-center space-x-3 px-6 py-2 border-l-8 border-[#032347] text-[#032347]'
              : 'flex items-center space-x-3 px-6 py-2'
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className='px-1 py-2'>
          <CollapsibleTrigger
            className='mb-2'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <button className='flex items-center  space-x-6 px-6 py-2'>
              <div className='flex items-center space-x-3'>
                <Slack />
                <span>Menu</span>
              </div>
              {openMenu ? <ChevronRight /> : <ChevronDown />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className='px-2 pl-10'>
            {menuLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathName === item.href
                      ? 'flex items-center space-x-4  py-1 px-2 text-sm border-l-4 border-[#032347] text-[#032347]'
                      : 'flex items-center space-x-3  py-2'
                  }
                >
                  <Icon className='w-4 h-4' />
                  <span> {item.title} </span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href === pathName
                  ? 'flex items-center space-x-3 px-6 py-2 border-l-8 border-[#032347] text-[#032347]'
                  : 'flex items-center space-x-3 px-6 py-2'
              }
            >
              <Icon />
              <span> {item.title} </span>
            </Link>
          );
        })}
        <div className='px-6 py-2'>
          <button className='bg-[#032347] rounded-md   flex items-center space-x-3 px-8 py-3'>
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
