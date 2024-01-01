"use client"
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Genre } from './SearchJobComponent';

interface JobCardProps {
  job: {
    _id: string;
    title: string;
    description: string;
    location: string;
    type: string;
    genre: string;
    createdBy: string;
    status: string;
  };
  genres: Genre[] | null; // Allow genres to be null
}

const JobCard: React.FC<JobCardProps> = ({ job, genres }) => {
  const router = useRouter();
  const { _id, title, description, location, type, genre, createdBy, status } = job;
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // Find the genre object based on the genre ID
  const genreObj = genres?.find((g) => g._id === genre);

  const handleApply = async () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmApply = async () => {
    try {
      await axios.post('/api/users/applyjob', { jobId: _id });
      toast.success('Successfully applied for the job!', { duration: 4000 });
      setTimeout(() => {
        router.push('/profile');
      }, 1000);
    } catch (error: any) {
      toast.error('Failed to apply for the job');
      console.error('Error applying for job:', error.message);
    } finally {
      setIsConfirmationModalOpen(false);
    }
  };

  const handleCancelApply = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="flex flex-col p-4 border border-black rounded-md shadow-md mb-4 bg-primary bg-opacity-60 font-semibold">
      <div className='flex justify-between'>
        <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-black text-bold text-lg">Status: <span className={status === 'active' ? 'text-green-700' : 'text-red-700'}>{status}</span> </p>
      </div>
      <p className="text-black font-medium">{description}</p>
      <div className="flex justify-between mt-4">
        <div className='flex gap-3'>
          <p className="text-black">Location: {location}</p>
          <p className="text-black">Type: {type}</p>
          <p className="text-black">Genre: {genreObj?.name || 'N/A'}</p>
        </div>
        <button
          className="bg-primary-color text-white px-4 py-2 rounded"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>

      {/* Confirmation Modal */}
      {isConfirmationModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon */}
                    <svg className="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Confirm Apply
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to apply for this job?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleConfirmApply}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Yes, Apply
                </button>
                <button
                  onClick={handleCancelApply}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;
