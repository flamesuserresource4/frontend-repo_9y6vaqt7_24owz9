import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">About ViproBac</h1>
          <p className="text-gray-600 mt-3">We are a South African company focused on practical, science‑backed solutions for water and agriculture. Our mission is to restore polluted waters and strengthen agriculture using carefully managed copper and zinc technologies.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ['Integrity','We do what’s right for people and the environment.'],
              ['Science','Evidence first, marketing second.'],
              ['Local understanding','Built for South African realities.'],
            ].map(([t,b]) => (
              <div key={t} className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
                <p className="text-sm font-semibold text-gray-900">{t}</p>
                <p className="text-sm text-gray-700 mt-2">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Our team</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              {[
                ['Alex Mokoena','Founder & Water Specialist'],
                ['Lerato van der Merwe','Agronomist'],
                ['Dr. P. Naidoo','Research & Development'],
              ].map(([n,r]) => (
                <div key={n} className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-6">
                  <p className="font-semibold text-gray-900">{n}</p>
                  <p className="text-sm text-gray-700">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
