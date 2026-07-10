import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AppShell({ title, children }) {
  return (
    <div className="flex min-h-screen bg-gradient-page flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Topbar title={title} />
        <main className="px-4 sm:px-6 lg:px-8 pb-10 container">{children}</main>
      </div>
    </div>
  )
}
