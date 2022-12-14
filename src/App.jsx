import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Documentation from './pages/documentation/Documentation'
import Faq from './pages/faq/Faq'
import Navbar from './components/Navbar'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      </BrowserRouter>
      
      
    
  )
}

export default App