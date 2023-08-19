import Image from 'next/image'
import { SideNav } from '@/Components'

export default function Home() {
  return (
    <div className="app">
      <SideNav />
      <div className="content">
        <h1>Page Content</h1>
      </div>
    </div>
  )
}
