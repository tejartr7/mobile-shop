import Image from 'next/image'
import Header from '../app/header/page';
import Subheader from '../app/subheader/Page';
import Hero from '../app/hero/Page.jsx';
import Brands from '../app/brands/Page';
import Services from '../app/services/Page';
import Testimonials from '../app/testimonials/Page.jsx';
import Contact from '../app/contact/Page';
import Dummy from '../app/dummy/Page';
export default function Home() {
  return (
    <div>
      <Subheader/>
      <Header/>
      <Hero/>
      <Brands/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  )
};
