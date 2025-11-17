import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Applications(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Use Cases & Applications</h1>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Municipal wastewater','Final disinfection after biological treatment'],
              ['Industrial effluent','Retrofit dosing with monitoring'],
              ['Rivers & dams','Targeted remediation and ongoing suppression'],
              ['Boreholes & springs','Point‑of‑use and small systems'],
              ['Orchards & vineyards','Foliar and soil programs'],
              ['Row crops & vegetables','Yield, quality and disease tolerance'],
            ].map(([t,s]) => (
              <div key={t} className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
                <p className="font-semibold text-gray-900">{t}</p>
                <p className="text-sm text-gray-700 mt-1">{s}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
