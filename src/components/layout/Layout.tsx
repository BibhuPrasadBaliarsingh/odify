import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { useSmoothScroll } from '@/lib/lenis'

export function Layout() {
  useSmoothScroll()

  return (
    <div className="flex min-h-screen flex-col bg-ink text-bone">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
