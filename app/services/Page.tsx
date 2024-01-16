import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
const Page = () => {
  return (
    <section id='services'>
      <div className="p-4 font-poppins" style={{ backgroundColor: '#0cafe5' }}>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center lg:w-1/4 md:w-1/2">
            <div className="mb-4 flex items-center text-white text-2xl font-bold">
              <FontAwesomeIcon icon={faTag} className="m-4" style={{ width: '50px', height: '50px' }} />
              Great Discounts
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/4 md:w-1/2">
            <div className="mb-4 flex items-center text-white text-2xl font-bold">
              <FontAwesomeIcon icon={faScrewdriverWrench} className="m-4" style={{ width: '50px', height: '50px' }} />
              Mobile servicing
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/4 md:w-1/2">
            <div className="mb-4 flex items-center text-white text-2xl font-bold">
              <FontAwesomeIcon icon={faSmile} className="m-4" style={{ width: '50px', height: '50px' }} />
              Customer Satisfaction
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/4 md:w-1/2">
            <div className="mb-4 flex items-center text-white text-2xl font-bold">
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
