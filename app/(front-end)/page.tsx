

import Link from 'next/link';
import React from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen'>
      <h2 className='text-4xl'>PathTreks Delivery</h2>

      <Link className='my-4 underline' href="/register-client">Become a PathTreks Delivery Client</Link>
    </div>
  );
};

export default Home;
