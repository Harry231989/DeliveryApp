
import React from 'react';
import {  LucideProps } from 'lucide-react';

interface LargeCardProps {
  data: {
    className?: string;
    period: string;
    sales: number;
    color: string;
    icon: React.ComponentType<LucideProps>
  };
}

export default function LargeCard({ data }: LargeCardProps) {
  const IconComponent = data.icon

  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2  ${data.color} `}>
      
       <IconComponent size={32} />
      <h4> {data.period} </h4>
      <h2 className='lg:text-3xl text-2xl'>€{data.sales}</h2>
    </div>
  );
}
