import React from 'react'
import Heading from '@/components/backend/Heading'
import LargeCards from '@/components/backend/LargeCards'
import SmallCards from '@/components/backend/SmallCards'
import DashboardChart from '@/components/backend/DashboardChart'

export default function page() {
  return (
    <div>
        <Heading title='Dashboard Overview'/>
        {/* Large Cards */}
        <LargeCards />
        {/* Small Cards */}
        <SmallCards />
        {/* Charts */}
        <DashboardChart />
        {/* Recent Orders Table */}
    </div>
  )
}
