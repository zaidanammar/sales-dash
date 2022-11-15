import React, { ReactNode } from 'react'

import RightBar from '../rightbar'
import Sidebar from '../sidebar'

type TemplatesLayoutProps = {
  children: ReactNode
}

const TemplatesLayout = ({ children }: TemplatesLayoutProps) => (
  <main className="h-screen max-h-screen overflow-auto">
    <section className="flex w-full h-full">
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-scroll py-8 px-10">
        {children}
      </div>
      <RightBar />
    </section>
  </main>
)

export default TemplatesLayout
