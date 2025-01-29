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
      color: 'bg-green-600',
      icon: BookType,
    },
    {
      period: 'Yesterday Orders',
      sales: 14000,
      color: 'bg-blue-600',
      icon: CalendarArrowDown,
    },
    {
      period: 'This Month',
      sales: 131000,
      color: 'bg-yellow-600',
      icon: Calendar1,
    },
    {
      period: 'All Time Sales',
      sales: 8000000,
      color: 'bg-purple-600',
      icon: BadgeEuro,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      {orderStats.map((item, i) => (
        <LargeCard className='bg-green-600' data={item} key={i} />
      ))}
    </div>
  );
}
