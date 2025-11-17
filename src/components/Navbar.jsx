import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Droplets, Leaf, FlaskConical, ShieldCheck, Info, PhoneCall } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/viprobac', label: 'ViproBac' },
  { to: '/viprogro', label: 'ViproGro' },
  { to: '/sans-241', label: 'SANS 241' },
  { to: '/research', label: 'Research' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function classNames(...c) { return c.filter(Boolean).join(' ') }

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={classNames('fixed top-0 inset-x-0 z-50 transition-all duration-300', scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent')}> 
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-900 to-teal-500 text-white grid place-items-center shadow-md">
              <Droplets className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-blue-900">ViproBac</p>
              <p className="text-[11px] uppercase tracking-wider text-gray-500">Water & Growth</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({isActive}) => classNames('text-sm font-medium transition-colors hover:text-blue-900', isActive ? 'text-blue-900' : 'text-gray-600')}>{item.label}</NavLink>
            ))}
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-blue-800 transition">
              <PhoneCall className="h-4 w-4" /> Book a consultation
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 shadow-sm bg-white/70 backdrop-blur">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({isActive}) => classNames('rounded-lg px-3 py-2 text-sm font-medium', isActive ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-gray-50')}>{item.label}</NavLink>
            ))}
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-900 text-white px-3 py-2 text-sm font-semibold shadow">
              <PhoneCall className="h-4 w-4" /> Book a consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
