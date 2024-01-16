import Image from 'next/image'
import Header from '../app/header/page';
import Subheader from '../app/subheader/Page';
import Hero from '../app/hero/Page.jsx';
import Brands from '../app/brands/Page';
import Services from '../app/services/Page';
export default function Home() {
  return (
    <div>
      <Subheader/>
      <Header/>
      <Hero/>
      <Brands/>
      <Services/>
    </div>
  )
};
