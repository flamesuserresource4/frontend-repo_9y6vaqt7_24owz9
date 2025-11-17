import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { SplitCards, WhyCopperZinc, BackedByScience, WhoWeServe, CtaStrip } from '../components/FeatureCards'

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero
          title="ViproBac: Solving South Africa’s Water Crisis, One Drop at a Time"
          subtitle="Copper & zinc based solutions for clean water and healthier crops."
          variant="home"
          primaryCta={<Link to="/viprobac" className="inline-flex items-center rounded-full bg-white text-blue-900 px-5 py-2.5 text-sm font-semibold shadow hover:bg-blue-50">Water purification – ViproBac</Link>}
          secondaryCta={<Link to="/viprogro" className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/20">Growth & disease control – ViproGro</Link>}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900">The problem in South Africa</h2>
            <p className="text-gray-600 mt-3 max-w-3xl">Polluted rivers and dams, failing wastewater infrastructure and reliance on outdated disinfectants have left communities and industries exposed. Farmers face disease pressure, rising input costs and yield risk. We focus on practical, science‑led answers fit for South African realities.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Many systems fail microbiological and chemical standards',
                'Chlorine by‑products pose long‑term environmental concerns',
                'Municipalities often struggle to comply consistently with SANS 241',
              ].map((t) => (
                <div key={t} className="rounded-2xl ring-1 ring-gray-200 bg-gray-50 p-5 text-sm text-gray-800">{t}</div>
              ))}
            </div>
          </div>
        </section>

        <SplitCards />
        <WhyCopperZinc />
        <BackedByScience />
        <WhoWeServe />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
