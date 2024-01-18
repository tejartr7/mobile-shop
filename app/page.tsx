import Image from 'next/image'
import Header from './header/page';
import Subheader from './subheader/Page';
import Hero from './hero/Page.jsx';
import Brands from './brands/Page';
import Services from './services/Page';
import Testimonials from './testimonials/Page.jsx';
import Contact from './contact/Page';
import Footer from './footer/Page'
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
