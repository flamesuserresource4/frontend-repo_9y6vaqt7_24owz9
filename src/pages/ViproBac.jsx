import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function ViproBac(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero
          title="ViproBac: Copper & Zinc Biocide for Safer Water"
          subtitle="From wastewater plants to rural boreholes, a modern alternative to chlorine‑based disinfection."
          variant="water"
          primaryCta={<Link to="/contact" className="inline-flex items-center rounded-full bg-white text-blue-900 px-5 py-2.5 text-sm font-semibold shadow hover:bg-blue-50">Speak to a water specialist</Link>}
          secondaryCta={<Link to="/sans-241" className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/20">SANS 241 & safety</Link>}
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900">How ViproBac works</h2>
              <p className="text-gray-600 mt-3">Copper and zinc ions penetrate microbial membranes, disrupt metabolism and form reactive oxygen species that lead to cell death. This multi‑pathway action reduces the chance of resistance and is effective on bacteria, viruses, protozoa and fungi.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-10">Where you can use it</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-gray-700">
                {[
                  'Wastewater – final disinfection',
                  'Sewerage & effluent channels',
                  'Rivers, dams, canals and ponds',
                  'Springs and boreholes',
                  'Drinking water plants – disinfection stage',
                ].map((i) => (<li key={i} className="rounded-xl bg-gray-50 ring-1 ring-gray-200 p-3">{i}</li>))}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10">Performance & data</h3>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {[
                  ['≈99%','E. coli & coliforms'],
                  ['≈90%','HPC reduction'],
                  ['~150 ppm','1.5 h contact time']
                ].map(([a,b]) => (
                  <div key={a} className="rounded-2xl bg-white ring-1 ring-gray-200 p-5 shadow-sm">
                    <p className="text-2xl font-extrabold text-blue-900">{a}</p>
                    <p className="text-xs text-gray-600 mt-1">{b}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-3">Works at shorter contact times and different dosages depending on application and engineering design. Always applied under controlled dosing with monitoring.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-10">Benefits vs chlorine</h3>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                {[
                  ['No chlorinated by‑products','Chlorine creates DBPs'],
                  ['Persistent antimicrobial effect','Quick decay in some systems'],
                  ['Improved environmental profile','Potential toxicity concerns'],
                  ['Retrofits into existing plants','Often complex changes'],
                ].map(([pro, con]) => (
                  <div key={pro} className="rounded-xl bg-white ring-1 ring-gray-200 p-4">
                    <p className="text-sm font-semibold text-emerald-700">{pro}</p>
                    <p className="text-xs text-gray-500 mt-1">vs {con}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-blue-50 ring-1 ring-blue-100">
                <p className="text-sm text-blue-900"><strong>SANS 241 & safety:</strong> At recommended dosages, residual copper and zinc remain below SANS 241 limits (Cu ≤ 2 mg/L; Zn ≤ 5 mg/L). <Link to="/sans-241" className="underline font-semibold">Read more</Link>.</p>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 p-6 text-white shadow">
                <p className="font-bold">Implementation & engineering support</p>
                <ul className="mt-3 text-sm space-y-2">
                  <li>• Dosing design (inline injection, mixing, spray)</li>
                  <li>• Site assessments and pilot tests</li>
                  <li>• Ongoing monitoring plans</li>
                </ul>
                <Link to="/contact" className="inline-block mt-4 rounded-full bg-white text-blue-900 px-4 py-2 text-sm font-semibold">Speak to a specialist</Link>
              </div>

              <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
                <p className="text-sm text-gray-700">Phone: +27 (0)82 462 5184<br/>Email: info@viprobac.co.za</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
