import React from 'react';
import LargeCard from './LargeCard';
import {
  CalendarArrowDown,
  Calendar1,
  BadgeEuro,
  BookType,
  LucideProps,
} from 'lucide-react';

interface OrderStat {
  period: string;
  sales: number;
  color: string;
  icon: React.ComponentType<LucideProps>;
}

export default function LargeCards() {
  const orderStats: OrderStat[] = [
    {
      period: 'Today Orders',
      sales: 11000,
      color: 'bg-[#1E658F]',
      icon: BookType,
    },
    {
      period: 'Yesterday Orders',
      sales: 14000,
      color: 'bg-[#3681B2]',
      icon: CalendarArrowDown,
    },
    {
      period: 'This Month',
      sales: 131000,
      color: 'bg-[#032347]',
      icon: Calendar1,
    },
    {
      period: 'All Time Sales',
      sales: 8000000,
      color: 'bg-[#3D7299]',
      icon: BadgeEuro,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      {orderStats.map((item, i) => (
        <LargeCard className='bg-[#1E658F]' data={item} key={i} />
      ))}
    </div>
  );
}
