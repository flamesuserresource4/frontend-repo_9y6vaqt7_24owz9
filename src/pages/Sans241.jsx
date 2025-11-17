import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Sans241(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">SANS 241 & Compliance</h1>
          <p className="text-gray-600 mt-3">SANS 241 is South Africa’s national standard for drinking‑water quality. It defines safe limits for microbiological, chemical, physical and aesthetic parameters for water people drink over a lifetime.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-900">Relevant chemical limits (drinking water)</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Copper: max ≈ 2 mg/L (2000 µg/L)</li>
                <li>• Zinc: max ≈ 5 mg/L</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-blue-50 ring-1 ring-blue-100 p-6">
              <p className="text-sm text-blue-900"><strong>Applied correctly</strong>, ViproBac delivers disinfection at the plant or source while residual copper and zinc remain below these thresholds. No chlorinated disinfection by‑products are formed.</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-6">
            <p className="text-sm text-gray-800">In South Africa, many municipal water systems periodically fail one or more SANS 241 criteria, especially microbiological and chemical. Private systems and institutions must take responsibility for their own compliance. We can help with assessments, dosing design and monitoring plans.</p>
          </div>

          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-full bg-blue-900 text-white px-5 py-2.5 text-sm font-semibold">Get help with SANS 241 certification</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
