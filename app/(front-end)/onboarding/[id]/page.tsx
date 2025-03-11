'use client';

import NewClientForm from '@/components/backend/NewClientForm';
import { getData } from '@/lib/getData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function Page() {
  const { id } = useParams(); // ✅ Get user ID from URL params
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  useEffect(() => {
    async function fetchUser() {
      try {
        console.log(`Fetching user with ID: ${id}`);
        const fetchedUser = await getData(`users/${id}`);

        console.log("Fetched User:", fetchedUser);

        setUser(fetchedUser.user); // ✅ Ensure correct structure
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold py-10">
        Loading user details...
      </div>
    );
  }

  return (
    <div className=''>
      <div className='max-w-4xl p-4 mx-auto'>
        <h2 className='text-center text-lg font-semibold'>
          Hello {user?.name || 'Guest'}, Tell More About Yourself
        </h2>
      </div>
      {user && <NewClientForm user={user} />} {/* ✅ Only show form when user is available */}
    </div>
  );
}
