import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Page = () => {
  return (
    <nav className="bg-black font-Poppins font-bold px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
      <div className="flex justify-between items-center lg:mr-10">
        <span className="text-white text-xl">BrandName</span>
        <button className="border border-white px-2 py-1 rounded text-white opacity-100 hover:opacity-75 lg:hidden bg-white" id="navbar-toggle" style={{ border: '4px solid #00B8FF', color: 'white' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" style={{ color: '#00B8FF' }}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        </button>
      </div>
      <div className="hidden lg:flex flex-grow" id="navbar-collapse">
        <div className="flex lg:my-0">
          <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">
            <li>
              <a href="/#hero" className="block text-white hover:text-blue-500 py-2 md:mx-2">Home</a>
            </li>
            {/* <li>
              <a href="/#about" className="block text-white hover:text-blue-500 py-2 md:mx-2">About</a>
            </li>*/}
            <li>
              <a href="/#brands" className="block text-white hover:text-blue-500 py-2 md:mx-2">Brands</a>
            </li>
            <li>
              <a href="/#services" className="block text-white hover:text-blue-500 py-2 md:mx-2">Services</a>
            </li>
            <li>
              <a href="/#reviews" className="block text-white hover:text-blue-500 py-2 md:mx-2">reviews</a>
            </li>
            <li>
              <a href="/#contact" className="block text-white hover:text-blue-500 py-2 md:mx-2">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Page;
