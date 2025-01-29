import React from 'react';

interface HeadingProps {
  title: string; // Explicitly type the "title" prop as a string
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className='text-2xl font-semibold text-slate-50'>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
