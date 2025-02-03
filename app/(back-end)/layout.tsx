import Navbar from '@/components/backend/Navbar';
import Sidebar from '@/components/backend/Sidebar';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen bg-slate-100'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className='flex-1 lg:ml-60'>
        {/* Navbar */}
        <Navbar />
        {/* Page Content */}
        <main className='mt-10 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
