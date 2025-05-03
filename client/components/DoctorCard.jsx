import React from 'react';

const DoctorCard = ({ doctor }) => {
  const {
    id,
    name,
    image,
    specialization,
    experience,
    qualification,
    location,
    clinic,
    fees,
    rating,
    isHour,
    availability,
    cashback,
  } = doctor;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border border-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Doctor info section with image */}
        <div className="flex w-full md:w-3/5">
          {/* Doctor image */}
          <div className="mr-4 relative">
            <img 
              src={image || "https://via.placeholder.com/80"} 
              alt={name} 
              className="w-20 h-20 rounded-full object-cover border border-gray-200"
            />
            {isHour && (
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                DOCTOR OF THE HOUR
              </div>
            )}
          </div>

          {/* Doctor Details */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                Dr. {name}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </h2>
            </div>
            
            <p className="text-sm text-gray-600 mb-1">{specialization}</p>
            
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <span className="mr-2">{experience} YEARS</span>
              <span>•</span>
              <span className="mx-2">{qualification}</span>
            </div>
            
            <div className="text-xs text-gray-500 mt-2">
              {clinic}
              {location && <span> - {location}</span>}
            </div>
            
            {rating && (
              <div className="flex items-center mt-2">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded flex items-center">
                  <span>{rating}%</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 ml-2">(250+ Patients)</span>
              </div>
            )}
          </div>
        </div>

        {/* Price and booking section */}
        <div className="flex flex-col justify-between mt-4 md:mt-0 md:w-2/5 md:pl-4 md:border-l md:border-gray-200">
          <div className="flex items-start justify-end">
            <div className="text-right">
              <div className="font-semibold text-lg">₹{fees}</div>
              {cashback && (
                <div className="text-xs flex items-center text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                  ₹{cashback} Cashback
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-auto">
            <button className="w-full bg-white text-primary border border-primary font-medium py-2 px-4 rounded hover:bg-blue-50 transition-colors mt-4">
              Consult Online
              {availability && (
                <span className="block text-xs font-normal mt-1">Available in {availability} minutes</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard; 