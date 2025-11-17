import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function ViproGro(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero
          title="ViproGro: Growth Stimulant & Natural Disease Control"
          subtitle="Copper & zinc based foliar and soil applications for stronger roots, healthier leaves and better yields."
          variant="growth"
          primaryCta={<Link to="/contact" className="inline-flex items-center rounded-full bg-white text-emerald-900 px-5 py-2.5 text-sm font-semibold shadow hover:bg-emerald-50">Chat about your crop</Link>}
          secondaryCta={<button className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/20">Download technical data sheet</button>}
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900">Why ViproGro?</h2>
              <p className="text-gray-600 mt-3">ViproGro supplies essential copper and zinc micronutrients to support enzyme systems, respiration and lignin synthesis. It boosts growth while suppressing a range of fungal and bacterial diseases when used as part of a balanced crop program.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-10">What it controls / supports</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-gray-700">
                {[
                  'Fungal: black spot, rust, botrytis blight, powdery mildew',
                  'Bacterial: black rot, canker, soft rot, leaf spots, wilts, blights',
                ].map((i) => (<li key={i} className="rounded-xl bg-gray-50 ring-1 ring-gray-200 p-3">{i}</li>))}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10">Micronutrient role of Cu & Zn</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-3 space-y-2">
                <li>Co‑factors in key enzymes (e.g. cytochrome oxidase, polyphenol oxidase)</li>
                <li>Important in photosynthesis, respiration and phenolic metabolism</li>
                <li>Influence lignification → stem strength and disease tolerance</li>
                <li>Support efficient grain filling and fruit quality</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10">Symptoms of copper deficiency</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 text-gray-700">
                {[
                  'Pale/yellow young leaves',
                  'Deformed or twisted leaves',
                  'Necrotic tips and weak stems',
                  'Delayed maturity, low grain number and size',
                ].map((i) => (<div key={i} className="rounded-xl bg-gray-50 ring-1 ring-gray-200 p-3">{i}</div>))}
              </div>

              <div className="mt-10 rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 p-5">
                <p className="text-sm text-emerald-900"><strong>Example:</strong> In sorghum trials, ~250 ppm ViproGro spray improved root development and controlled fungal infections compared to untreated controls. Contact us for crop‑specific programs.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-10">Application & safety</h3>
              <p className="text-gray-600 mt-3">Use as part of a balanced fertiliser and crop protection program. Do not overapply copper; follow label and agronomic advice to stay environmentally safe. Suitable for row crops, orchards, vineyards, vegetables and gardens.</p>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 p-6 text-white shadow">
                <p className="font-bold">Talk to an agronomist</p>
                <p className="text-sm mt-2">We’ll help you design a program that boosts growth and controls disease for your crop and region.</p>
                <Link to="/contact" className="inline-block mt-4 rounded-full bg-white text-emerald-900 px-4 py-2 text-sm font-semibold">Get advice</Link>
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
