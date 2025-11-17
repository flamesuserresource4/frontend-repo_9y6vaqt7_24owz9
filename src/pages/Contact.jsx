import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [status, setStatus] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we\'ll reply within 1–2 business days.')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Book a consultation</h1>
          <p className="text-gray-600 mt-3">Tell us about your water system or crop. We’ll get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Organisation</label>
                <input className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Area of interest</label>
              <select className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                <option>ViproBac – Water purification</option>
                <option>ViproGro – Growth & disease control</option>
                <option>SANS 241 / compliance support</option>
                <option>Distributor / partnership</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="flex items-center gap-2">
              <input id="callback" type="checkbox" className="rounded border-gray-300 text-blue-900 focus:ring-blue-900" />
              <label htmlFor="callback" className="text-sm text-gray-700">I’d like to request a call‑back.</label>
            </div>
            <button type="submit" className="rounded-full bg-blue-900 text-white px-5 py-2.5 text-sm font-semibold">Send message</button>
            {status && <p className="text-sm text-emerald-700">{status}</p>}

            <div className="text-sm text-gray-600">
              <p>Phone: +27 (0)82 462 5184 • Email: info@viprobac.co.za • South Africa</p>
              <p className="mt-2">We’ll reply within 1–2 business days.</p>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
