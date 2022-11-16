import React from 'react'
import DashboardInsight from '../components/organisms/dashboard-insight'

const Dashboard = () => (
  <main>
    <aside>
      <p className="text-2xl font-bold">Dashboard</p>
      <p className="font-bold text-textDark2">
        Today’s date: Sun, 10 April 2022
      </p>
    </aside>
    <DashboardInsight />
  </main>
)

export default Dashboard
