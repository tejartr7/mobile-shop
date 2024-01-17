
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  return (
    <div className='p-4' style={{ backgroundColor: '#0cafe5' }}>
      <h1 className='text-center text-3xl font-bold'>Contact us</h1>

      {/* Container div with equal dimensions */}
      <div className="md:flex md:w-full">

        {/* Google Map location */}
        <div className="md:w-1/2 mb-4 md:mb-0 flex flex-col items-center justify-center">
          <span className='text-xl mb-2 font-bold'>Our location</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.996227797748!2d78.42294323857062!3d17.460075195859915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9107fedf4be7%3A0x393e5c11bb6e6d6b!2sApple%20pharmacy!5e0!3m2!1sen!2sin!4v1705515648765!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact information */}
        <div className="md:w-1/2 md:pl-4 flex flex-col justify-center items-center text-center">
          <div className="mb-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" style={{ width: '25px', height: '25px' }} />
            <span className='text-lg'><a href=''>Contact: +012 (345) 678 99</a></span>
          </div>

          <div className="mb-4 flex justify-center items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{ width: '25px', height: '25px' }} />
            <span><a href=''>Email: Email@gmail.com</a></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Page;
