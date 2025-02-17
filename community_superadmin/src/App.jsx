import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/contact_pages/Contact'
import Home from './pages/common_pages/Home'
import Aboutus from './pages/common_pages/Aboutus'
import Pagenotfound from './pages/common_pages/Pagenotfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/homepage" element={<Home/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/*" element={<Pagenotfound/>}/>
      <Route path="/pagenotfound" element={<Pagenotfound/>}/>
     </Routes>
    </Router>
  )
}

export default App
