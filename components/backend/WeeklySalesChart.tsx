'use client';
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export default function WeeklySalesChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const tabs = [
    {
      title: 'Sales',
      type: 'sales',
      data: {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: '#CD0000',
            backgroundColor: '#CD0000',
          },
        ],
      },
    },
    {
      title: 'Orders',
      type: 'orders',
      data: {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: '#EF9226',
            backgroundColor: '#EF9226',
          },
        ],
      },
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>
        Weekly Sales
      </h2>
      <div className='p-4'>
        {/* Tabs */}
        <div className='text-sm font-medium text-center text-gray-200 border-b border-gray-100 dark:text-gray-400 dark:border-gray-100'>
          <ul className='flex flex-wrap -mb-px'>
            {tabs.map((tab, i) => {
              const isActive = chartToDisplay === tab.type;
              const activeColor = isActive
                ? tab.data.datasets[0].borderColor
                : 'inherit';

              return (
                <li className='me-2' key={i}>
                  <button
                    onClick={() => setChartToDisplay(tab.type)}
                    className={
                      isActive
                        ? `inline-block p-4 border-b-2 rounded-t-lg active dark:border-yellow-500`
                        : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg text-slate-800 hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-100'
                    }
                    style={{ color: activeColor }}
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Content to display */}
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line options={options} data={tab.data} key={i} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
