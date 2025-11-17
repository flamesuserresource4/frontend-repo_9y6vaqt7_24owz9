import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ViproBac from './pages/ViproBac'
import ViproGro from './pages/ViproGro'
import Sans241 from './pages/Sans241'
import Research from './pages/Research'
import About from './pages/About'
import Contact from './pages/Contact'
import Applications from './pages/Applications'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viprobac" element={<ViproBac />} />
      <Route path="/viprogro" element={<ViproGro />} />
      <Route path="/sans-241" element={<Sans241 />} />
      <Route path="/research" element={<Research />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/applications" element={<Applications />} />
    </Routes>
  )
}

export default App
