import Image from 'next/image'
import Header from './header/page';
import Subheader from './subheader/Page';
import Hero from './hero/Page.jsx';
import Brands from './brands/Page';
import Services from './services/Page';
import Testimonials from './testimonials/Page.jsx';
import Contact from './contact/Page';
import Dummy from './dummy/Page';
import Footer from './footer/Page'
export default function Home() {
  return (
    <div className='font-poppins'>
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
