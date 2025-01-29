import Navbar from '@/components/backend/Navbar';
import Sidebar from '@/components/backend/Sidebar';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // Ensures the "children" prop is strongly typed
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className='w-full'>
        {/* Header */}
        <Navbar />
        <main className='ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
