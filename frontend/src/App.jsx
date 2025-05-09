
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'

import { Toaster } from 'react-hot-toast';
import {Inicio} from './components/Inicio'
import {ServicesPage} from './pages/ServicesPage'
import {LoginForm} from './components/LoginForm'
import {RegisterForm} from './components/RegisterForm'
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Terms } from './pages/Terms';
import { ScrollToTop } from './components/Scroll';
import { Contact } from './components/Contact';
import Panel from './pages/Panel';


function App() {
  return (
    <>
    
   <BrowserRouter>
   <ScrollToTop />
    <Toaster position='top-center' reverseOrder={false} />
   <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/Inicio" element={<Inicio />} />
    <Route path="/Servicios" element={<ServicesPage />} />
    <Route path="/Login" element={<LoginForm/>} />
    <Route path='/Register' element={<RegisterForm/>} />
    <Route path="/SobreNosotros" element={<About />} />
    <Route path="/Terminos" element={<Terms />} />
    <Route path="/Contacto" element={<Contact />} />
    <Route path="/Panel" element={<Panel />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}
export default App;