import React from 'react'
import Profile from '../../molecules/profile'
import CardBalance from '../../molecules/card/balance'

const TemplatesRightBar = () => (
  <main className="w-[320px] bg-secondary p-8 lg:block hidden">
    <Profile />
    <CardBalance />
  </main>
)

export default TemplatesRightBar
