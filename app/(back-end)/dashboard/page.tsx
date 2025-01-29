import React from 'react'
import Heading from '@/components/backend/Heading'
import LargeCards from '@/components/backend/LargeCards'
import SmallCards from '@/components/backend/SmallCards'

export default function page() {
  return (
    <div>
        <Heading title='Dashboard Overview'/>
        {/* Large Cards */}
        <LargeCards />
        {/* Small Cards */}
        <SmallCards />
        {/* Charts */}
        {/* Recent Orders Table */}
    </div>
  )
}
