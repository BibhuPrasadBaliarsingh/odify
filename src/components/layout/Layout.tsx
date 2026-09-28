import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { VerticalEmbroideryRail } from '@/components/ui/VerticalEmbroideryRail'

export function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-ink">
      {/* Right-Side Full-Page Vertical Embroidery Spine */}
      <VerticalEmbroideryRail />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
