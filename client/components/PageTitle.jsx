import React from 'react';

const PageTitle = ({ title, count }) => {
  return (
    <div className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            {title}
          </h1>
          {count && <p className="text-sm text-gray-500">({count} doctors)</p>}
        </div>
      </div>
    </div>
  );
};

export default PageTitle; 