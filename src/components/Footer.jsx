import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="text-xl font-extrabold text-blue-900">ViproBac</p>
          <p className="text-sm text-gray-600 mt-2">Science‑backed copper & zinc solutions for cleaner water and healthier crops in South Africa.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Products</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/viprobac" className="hover:text-gray-900">ViproBac – Water</Link></li>
            <li><Link to="/viprogro" className="hover:text-gray-900">ViproGro – Growth</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link to="/research" className="hover:text-gray-900">Research</Link></li>
            <li><Link to="/sans-241" className="hover:text-gray-900">SANS 241</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Contact</p>
          <p className="text-sm text-gray-600 mt-2">+27 (0)82 462 5184<br/>info@viprobac.co.za<br/>South Africa</p>
          <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} ViproBac. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
