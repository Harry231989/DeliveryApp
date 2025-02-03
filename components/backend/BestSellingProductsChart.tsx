'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: [
      'Currywurst',
      'Kassler',
      'Roast goose',
      'Königsberger Klopse',
      'Döner kebab',
      'Buletten',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#EF9226',
          '#DF5500',
          '#990100',
          '#CD0000',
          '#3681B2',
          '#1E658F',
        ],
        borderColor: [
          '#EF9226',
          '#DF5500',
          '#990100',
          '#CD0000',
          '#3681B2',
          '#1E658F',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>
        Best Selling Charts
      </h2>
      {/* Chart  */}
      <Pie data={data} />
    </div>
  );
}
