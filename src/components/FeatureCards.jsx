import { motion } from 'framer-motion'
import { ShieldCheck, FlaskConical, Droplets, Leaf, Factory, Building2, Hotel, Home, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SplitCards() {
  const cards = [
    {
      title: 'ViproBac – Water Purification',
      desc: 'Liquid copper & zinc biocide for wastewater, rivers, dams, springs, boreholes and final disinfection at drinking water plants. Cuts microbes without chlorinated by‑products.',
      to: '/viprobac',
      accent: 'from-blue-600 to-teal-500',
      icon: Droplets
    },
    {
      title: 'ViproGro – Growth & Disease Control',
      desc: 'Copper & zinc based growth stimulant and disease control for crops, fruit, vineyards and gardens. Micronutrients plus natural suppression in one.',
      to: '/viprogro',
      accent: 'from-emerald-600 to-lime-500',
      icon: Leaf
    }
  ]
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.to} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group relative overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white p-6">
              <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.accent} text-white grid place-items-center shadow-md`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                  <p className="text-gray-600 mt-1">{c.desc}</p>
                </div>
              </div>
              <div className="mt-6">
                <Link to={c.to} className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">Explore {c.title.includes('Bac') ? 'ViproBac' : 'ViproGro'} →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyCopperZinc() {
  const items = [
    {
      title: 'Powerful antimicrobial',
      body: 'Copper and zinc ions disrupt membranes and enzymes, generating reactive oxygen species to inactivate bacteria, viruses, protozoa and fungi.'
    },
    {
      title: 'Sustainable & nature-aligned',
      body: 'Elements occur naturally and, when kept within limits, are safe for people and ecosystems with no chlorinated by‑products.'
    },
    {
      title: 'Essential micronutrients',
      body: 'At controlled doses they support plant and human health while continuing to suppress microbial regrowth.'
    },
  ]
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900">{it.title}</h4>
              <p className="text-gray-600 mt-2">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BackedByScience() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">Backed by science & independent testing</h3>
            <p className="text-gray-600 mt-3">Validated by Stellenbosch University, University of Cape Town, independent laboratories and AECI. Designed to fit South African realities and regulations.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                ['≈99%','coliforms & E. coli'],
                ['≈90%','HPC reduction'],
                ['1:1000','effective dilution']
              ].map(([a,b]) => (
                <div key={a} className="rounded-xl bg-white p-4 ring-1 ring-gray-200 shadow-sm">
                  <p className="text-2xl font-extrabold text-blue-900">{a}</p>
                  <p className="text-xs text-gray-600 mt-1">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/research" className="text-blue-900 font-semibold hover:underline">See detailed research & reports →</Link>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 ring-1 ring-gray-200" />
        </div>
      </div>
    </section>
  )
}

export function WhoWeServe() {
  const items = [
    ['Municipal & private plants', Factory],
    ['Industry & mines', Factory],
    ['Estates & hospitality', Hotel],
    ['Farmers & agri‑business', Leaf],
    ['Borehole users', Home],
    ['Distributors & partners', Users]
  ]
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-extrabold text-gray-900">Who we serve</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([label, Icon], i) => (
            <motion.div key={label} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.03}} className="group rounded-2xl ring-1 ring-gray-200 bg-white p-5 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-900 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-medium text-gray-800">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaStrip() {
  return (
    <section className="py-12 sm:py-14 bg-gradient-to-r from-blue-900 to-emerald-700 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-lg font-semibold">Need cleaner water or healthier crops? Talk to us today.</p>
        <Link to="/contact" className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold ring-1 ring-white/30 hover:bg-white/20">Book a consultation</Link>
      </div>
    </section>
  )
}
