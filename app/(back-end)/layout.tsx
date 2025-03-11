"use client"
import Navbar from '@/components/backend/Navbar';
import Sidebar from '@/components/backend/Sidebar';
import React, { ReactNode, useState } from 'react';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='flex min-h-screen bg-slate-100'>
      <ToastContainer />
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Main Content */}
      <div className='flex-1 lg:ml-60'>
        {/* Navbar */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* Page Content */}
        <main className='mt-6 p-14  bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
