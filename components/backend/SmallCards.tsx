import React from 'react';


import {
  CircleDashed,
  PackageSearch,
  PackageCheck,
  ShoppingCart,
  LucideProps,
} from 'lucide-react';
import SmallCard from './SmallCard';

interface cartStat {
  title: string;
  number: number;
  iconBg: string;
  icon: React.ComponentType<LucideProps>;
}

export default function SmallCards() {
  const cartStats: cartStat[] = [
    {
      title: 'Total Order',
      number: 150,
      iconBg: 'bg-[#CD0000]',
      icon: ShoppingCart,
    },
    {
      title: 'Orders Pending',
      number: 100,
      iconBg: 'bg-[#DF5500]',
      icon: CircleDashed,
    },
    {
      title: 'Orders Processing',
      number: 200,
      iconBg: 'bg-[#990100]',
      icon: PackageSearch,
    },
    {
      title: 'Orders Delivered',
      number: 150,
      iconBg: 'bg-green-600',
      icon: PackageCheck,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      {cartStats.map((data, i) => (
         <SmallCard data={data} key={i} />
      ))}
    </div>
  );
}
