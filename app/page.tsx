import Image from 'next/image'
import Header from './header/page';
import Subheader from './subheader/page';
import Hero from './hero/page.jsx';
import Brands from './brands/page';
import Services from './services/page';
import Testimonials from './testimonials/page.jsx';
import Contact from './contact/page';
import Footer from './footer/page'
import './globals.css'
export default function Home() {
  return (
    <div className='font-Poppins'>
      <Subheader/>
      <Header/>
      <Hero/>
      <Brands/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
};
