import React from 'react';

const HelpBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-6 text-white shadow-md">
      <div className="flex flex-col">
        <div className="mb-4">
          <img 
            src="https://via.placeholder.com/150x60" 
            alt="Doctor group" 
            className="w-full object-cover rounded"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">Need help consult the right doctor?</h3>
        <div className="mb-4">
          <div className="flex items-center">
            <a href="tel:+918040245807" className="text-white hover:underline">
              Call +91-8040245807
            </a>
            <span className="px-1">to</span>
          </div>
          <div>book instantly</div>
        </div>
      </div>
    </div>
  );
};

export default HelpBanner; 