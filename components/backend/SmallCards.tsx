import React from 'react';


import {
  CalendarArrowDown,
  Calendar1,
  BadgeEuro,
  ShoppingCart,
  LucideProps,
} from 'lucide-react';
import SmallCard from './SmallCard';

interface cartStat {
  period: string;
  sales: number;
  color: string;
  icon: React.ComponentType<LucideProps>;
}

export default function SmallCards() {
  const cartStats: cartStat[] = [
    {
      title: 'Total Order',
      sales: 150,
      iconBg: 'bg-green-600',
      icon: ShoppingCart,
    },
    {
      title: 'Orders Pending',
      sales: 100,
      iconBg: 'bg-orange-600',
      icon: CalendarArrowDown,
    },
    {
      title: 'Orders Processing',
      sales: 200,
    
      icon: Calendar1,
    },
    {
      title: 'Orders Delivered',
      sales: 150,
      
      icon: BadgeEuro,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      {cartStats.map((item, i) => (
        <SmallCard  />
      ))}
    </div>
  );
}
