import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faScrewdriverWrench, faCreditCard, faTag, faSmile } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  return (
    <section id='services'>
      <div className="p-4 font-poppins flex items-center text-center justify-center" style={{ backgroundColor: '#0cafe5' }}>
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:w-1/4 md:w-1/2 w-full mb-4 lg:mb-0 flex items-center text-center justify-center">
            <div className="flex items-center text-white text-2xl font-bold">
              <FontAwesomeIcon icon={faTag} className="m-4" style={{ width: '50px', height: '50px' }} />
              Great Discounts
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full mb-4 lg:mb-0 flex items-center text-center justify-center">
            <div className="flex items-center text-white text-2xl font-bold">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="m-4" style={{ width: '50px', height: '50px' }} />
              Mobile Servicing
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full mb-4 lg:mb-0 flex items-center text-center justify-center">
            <div className="flex items-center text-white text-2xl font-bold">
              <FontAwesomeIcon icon={faSmile} className="m-4" style={{ width: '50px', height: '50px' }} />
              Customer Satisfaction
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full mb-4 lg:mb-0 flex items-center text-center justify-center">
            <div className="flex items-center text-white text-2xl font-bold">
              <FontAwesomeIcon icon={faCreditCard} className="m-4" style={{ width: '50px', height: '50px' }} />
              Cashless Payments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
