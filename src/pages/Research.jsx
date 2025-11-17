import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Research(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Research & Testing</h1>
          <p className="text-gray-600 mt-3">Tested by Stellenbosch University, University of Cape Town, independent laboratories and AECI. Includes wastewater disinfection studies, drinking water applications and crop trials.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-900">ViproBac data highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Wastewater: ~150 ppm, 1.5 h contact → ≈99% reduction in E. coli & coliforms</li>
                <li>• HPC reduction ≈91% at same dose</li>
                <li>• Effective at dilutions up to ~1:1000 with suitable contact times</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-900">ViproGro data highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Sorghum example: ~250 ppm foliar spray → improved roots and lower fungal pressure</li>
                <li>• Benefits observed across crops when integrated into programs</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold text-gray-900">Downloads</p>
            <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'ViproBac Technical Report (Wastewater)',
                'ViproGro Biocidal Activity Summary',
                'Safety Data Sheets'
              ].map((d) => (
                <a key={d} href="#" className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 text-sm text-gray-800 hover:bg-white">
                  {d}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
