import React, { useState } from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  // State for expanded sections
  const [expandedExperience, setExpandedExperience] = useState(false);
  const [expandedLanguage, setExpandedLanguage] = useState(false);

  // Filter categories from the UI
  const experienceOptions = [
    { label: '0-5', value: '0-5' },
    { label: '6-10', value: '6-10' },
    { label: '11-16', value: '11-16' },
    // Extra option that will be shown when expanded
    { label: '17+', value: '17+' }
  ];

  const feeOptions = [
    { label: '₹100-500', value: '100-500' },
    { label: '₹500-1000', value: '500-1000' },
    { label: '₹1000+', value: '1000+' },
  ];

  // Basic language options
  const basicLanguageOptions = [
    { label: 'English', value: 'english' },
    { label: 'Hindi', value: 'hindi' },
    { label: 'Telugu', value: 'telugu' },
  ];

  // Extra language options
  const extraLanguageOptions = [
    { label: 'Tamil', value: 'tamil' },
    { label: 'Kannada', value: 'kannada' },
    { label: 'Malayalam', value: 'malayalam' },
    { label: 'Bengali', value: 'bengali' },
    { label: 'Marathi', value: 'marathi' },
    { label: 'Gujarati', value: 'gujarati' },
    { label: 'Punjabi', value: 'punjabi' },
    { label: 'Urdu', value: 'urdu' },
    { label: 'Odia', value: 'odia' },
    { label: 'Assamese', value: 'assamese' },
  ];

  const facilityOptions = [
    { label: 'Apollo Hospital', value: 'apollo-hospital' },
    { label: 'Other Clinics', value: 'other-clinics' },
  ];

  const consultModeOptions = [
    { label: 'Hospital Visit', value: 'hospital-visit' },
    { label: 'Online Consult', value: 'online-consult' },
  ];

  // Handle checkbox change
  const handleCheckboxChange = (category, value) => {
    let updatedSelection;
    
    if (filters[category]?.includes(value)) {
      // If already selected, remove it
      updatedSelection = filters[category].filter(item => item !== value);
    } else {
      // If not selected, add it
      updatedSelection = [...(filters[category] || []), value];
    }
    
    // Update filters
    setFilters({
      ...filters,
      [category]: updatedSelection
    });
  };

  // Get displayed experience options based on expanded state
  const displayedExperienceOptions = expandedExperience
    ? experienceOptions
    : experienceOptions.slice(0, 3);

  // Get displayed language options based on expanded state
  const displayedLanguageOptions = expandedLanguage
    ? [...basicLanguageOptions, ...extraLanguageOptions]
    : basicLanguageOptions;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      {/* Mode of Consult */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Mode of Consult</h3>
        <div className="space-y-2">
          {consultModeOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={`consult-${option.value}`}
                className="w-4 h-4 text-primary accent-primary"
                checked={filters.consultMode?.includes(option.value) || false}
                onChange={() => handleCheckboxChange('consultMode', option.value)}
              />
              <label htmlFor={`consult-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Experience (In Years)</h3>
        <div className="space-y-2">
          {displayedExperienceOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={`experience-${option.value}`}
                className="w-4 h-4 text-primary accent-primary"
                checked={filters.experience?.includes(option.value) || false}
                onChange={() => handleCheckboxChange('experience', option.value)}
              />
              <label htmlFor={`experience-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {!expandedExperience && (
          <button 
            className="text-primary text-sm mt-2 hover:underline focus:outline-none"
            onClick={() => setExpandedExperience(true)}
          >
            +1 More
          </button>
        )}
        {expandedExperience && (
          <button 
            className="text-primary text-sm mt-2 hover:underline focus:outline-none"
            onClick={() => setExpandedExperience(false)}
          >
            Show Less
          </button>
        )}
      </div>

      {/* Fees */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Fees (In Rupees)</h3>
        <div className="space-y-2">
          {feeOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={`fee-${option.value}`}
                className="w-4 h-4 text-primary accent-primary"
                checked={filters.fees?.includes(option.value) || false}
                onChange={() => handleCheckboxChange('fees', option.value)}
              />
              <label htmlFor={`fee-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Language</h3>
        <div className="space-y-2">
          {displayedLanguageOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={`language-${option.value}`}
                className="w-4 h-4 text-primary accent-primary"
                checked={filters.language?.includes(option.value) || false}
                onChange={() => handleCheckboxChange('language', option.value)}
              />
              <label htmlFor={`language-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {!expandedLanguage && (
          <button 
            className="text-primary text-sm mt-2 hover:underline focus:outline-none"
            onClick={() => setExpandedLanguage(true)}
          >
            +10 More
          </button>
        )}
        {expandedLanguage && (
          <button 
            className="text-primary text-sm mt-2 hover:underline focus:outline-none"
            onClick={() => setExpandedLanguage(false)}
          >
            Show Less
          </button>
        )}
      </div>

      {/* Facility */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Facility</h3>
        <div className="space-y-2">
          {facilityOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={`facility-${option.value}`}
                className="w-4 h-4 text-primary accent-primary"
                checked={filters.facility?.includes(option.value) || false}
                onChange={() => handleCheckboxChange('facility', option.value)}
              />
              <label htmlFor={`facility-${option.value}`} className="ml-2 text-sm text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 