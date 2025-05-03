import React from 'react';

const SortOptions = ({ sortBy, setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="w-full md:w-60">
      <div className="relative">
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="block appearance-none w-full bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="relevance">Relevance</option>
          <option value="experience_high">Experience: High to Low</option>
          <option value="experience_low">Experience: Low to High</option>
          <option value="fees_high">Fees: High to Low</option>
          <option value="fees_low">Fees: Low to High</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SortOptions; 