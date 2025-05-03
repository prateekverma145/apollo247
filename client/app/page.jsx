'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavLinks from '../components/NavLinks';
import PageTitle from '../components/PageTitle';
import FilterSidebar from '../components/FilterSidebar';
import DoctorCard from '../components/DoctorCard';
import SortOptions from '../components/SortOptions';
import HelpBanner from '../components/HelpBanner';
import axios from 'axios';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('relevance');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_URL = 'http://localhost:5000/api';

  // Function to fetch doctors from backend
  const fetchDoctors = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Prepare filter parameters for API
      const queryParams = {
        page: currentPage,
        limit: 10,
        sortBy: sortBy
      };
      
      // Add filters to query parameters
      if (filters.consultMode?.length) {
        queryParams.consultMode = filters.consultMode.join(',');
      }
      
      if (filters.experience?.length) {
        queryParams.experience = filters.experience.join(',');
      }
      
      if (filters.fees?.length) {
        queryParams.fees = filters.fees.join(',');
      }
      
      if (filters.language?.length) {
        queryParams.language = filters.language.join(',');
      }
      
      if (filters.facility?.length) {
        queryParams.facility = filters.facility.join(',');
      }
      
      // Make the actual API call
      const response = await axios.get(`${API_URL}/list-doctor-with-filter`, {
        params: queryParams
      });
      
      // Update state with response data
      setDoctors(response.data.data);
      setFilteredDoctors(response.data.data);
      setTotalDoctors(response.data.total);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
      
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setError('Failed to fetch doctors. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to apply filters and sorting
  useEffect(() => {
    fetchDoctors();
  }, [filters, sortBy, currentPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NavLinks />
      
      <PageTitle 
        title="Consult General Physicians Online - Internal Medicine Specialists" 
        count={totalDoctors}
      />
      
      <div className="container mx-auto px-4 pb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full lg:w-1/4">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
          
          {/* Main content */}
          <div className="w-full lg:w-2/4">
            {/* Sorting options */}
            <div className="mb-4 flex justify-end">
              <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
            </div>
            
            {/* Doctor list */}
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                </div>
              ) : error ? (
                <div className="bg-white p-8 rounded-lg text-center">
                  <p className="text-red-600 text-lg">{error}</p>
                  <button 
                    onClick={fetchDoctors}
                    className="mt-4 bg-primary text-white px-4 py-2 rounded"
                  >
                    Try Again
                  </button>
                </div>
              ) : filteredDoctors.length > 0 ? (
                <>
                  {filteredDoctors.map(doctor => (
                    <DoctorCard key={doctor._id || doctor.id} doctor={doctor} />
                  ))}
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center pt-4">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-primary hover:bg-gray-200'}`}
                        >
                          Previous
                        </button>
                        <span className="px-3 py-1 bg-primary text-white rounded">
                          {currentPage}
                        </span>
                        <button 
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-primary hover:bg-gray-200'}`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center">
                  <p className="text-gray-600 text-lg">No doctors match your search criteria.</p>
                  <button 
                    onClick={() => {
                      setFilters({});
                      setCurrentPage(1);
                    }}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Right sidebar */}
          <div className="w-full lg:w-1/4">
            <HelpBanner />
          </div>
        </div>
      </div>
    </div>
  );
} 