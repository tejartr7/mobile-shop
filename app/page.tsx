import Image from 'next/image'
import Header from '../app/header/page';
import Subheader from '../app/subheader/Page';
import Hero from '../app/hero/Page.jsx';
export default function Home() {
  return (
    <div>
      <Subheader/>
      <Header/>
      <Hero/>
      <h1>Home</h1>
    </div>
  )
};
