'use client';
import PageHeader from '@/components/backend/PageHeader';
import TableActions from '@/components/backend/TableActions';
import { Trash2, Search, Download } from 'lucide-react';
import React from 'react';

export default function Coupons() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <PageHeader
        heading='Market'
        href='/dashboard/markets/new'
        linkTitle='Add Market'
      />
      {/* Table Actions*/}
      {/* Export || Search || Bulk Delete */}
      <TableActions className='w-full' />

      <div className='py-8'>
        <h2> Table </h2>
      </div>
    </div>
  );
}
