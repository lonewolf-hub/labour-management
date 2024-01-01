"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import PopupModal from '../components/popup/PopupModal';
import Navbar from '../components/navbar/Navbar';
import JobForm from '../components/job-form/JobForm';
import AddGenreForm from '../components/form/AddGenreForm';

// Define the Job type if not already defined
interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  genre: string;
  createdBy: string;
  status: string;
}

interface UserData {
  _id: string;
  username: string;
  role: string;
}

interface UserProfileProps {
  params: {
    id: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ params }: UserProfileProps) => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<Job[] | null>(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  

  const getUserDetails = async () => {
    try {
      // Make a request to fetch user details
      const userRes = await axios.get('/api/users/user');
      let userData: UserData | null = null;

      // Handle user and admin roles
      if (userRes.data.data.role === 'admin') {
        try {
          const adminRes = await axios.get('/api/admin/admin');
          userData = { ...adminRes.data.data, role: 'admin' };
        } catch (adminError: any) {
          if (adminError.response && adminError.response.status === 403) {
            userData = { ...userRes.data.data, role: 'user' };
          } else {
            throw adminError;
          }
        }
      } else {
        userData = { ...userRes.data.data, role: 'user' };
      }

      setUserData(userData);
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const getAppliedJobs = async () => {
    try {
      // Make a request to fetch applied jobs
      const response = await axios.get('/api/users/appliedJob');
      console.log('Applied Jobs Response:', response.data); // Log the response data
      setAppliedJobs(response.data.data);
    } catch (error: any) {
      console.error('Error fetching applied jobs:', error.message);
      toast.error('Error fetching applied jobs');
    }
  };
  
  useEffect(() => {
    getUserDetails();
    getAppliedJobs();
  }, []);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-secondary-color text-white rounded-md gap-10">
        <h1 className='text-black text-4xl font-bold my-4'>Your Profile</h1>
        {userData?.role === 'admin' && (
            <>
            <h2 className="text-2xl font-bold  text-black">Add a Genre:</h2>
            <AddGenreForm/>
              <h2 className="text-2xl font-bold  text-black">Post a Job:</h2>
              <JobForm adminId={userData._id} />
            </>
          )}
        <div className="flex flex-col items-center justify-center w-2/3 p-8 bg-primary-color text-black mx-20 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, {userData?.username || 'Guest'}
          </h1>
          <hr className="border-black w-1/4 mb-6" />
          <h2 className="p-3 rounded bg-indigo-600 text-white">
            {userData?.role === 'admin' ? 'You are an admin!' : 'You are a user!'}
          </h2>
          <hr className="border-black w-1/4 my-6" />
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
          <button
            onClick={getUserDetails}
            className="bg-green-800 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh User Details
          </button>
        </div>
         
    
        
        {/* Display applied jobs section */}
        <div className="flex flex-col items-center justify-center w-2/3 p-8 bg-primary-color text-black mx-20 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold mb-4">Jobs Applied:</h2>
          {appliedJobs ? (
            <ul className="list-disc pl-6">
              {appliedJobs.map((job) => (
                <li key={job._id}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  <div className="flex">
                    <p className="mr-4">
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p className="mr-4">
                      <strong>Type:</strong> {job.type}
                    </p>
                    <p className="mr-4">
                      <strong>Genre:</strong> {job.genre}
                    </p>
                    <p className={job.status === 'active' ? 'text-green-700' : 'text-red-700'}>
                      <strong>Status:</strong> {job.status}
                    </p>
                  </div>
                  <hr className="border-gray-500 my-4" />
                </li>
              ))}
            </ul>
          ) : (
            <p>No jobs applied</p>
          )}
        </div>

        <PopupModal
          isOpen={isLogoutModalOpen}
          onClose={handleCloseLogoutModal}
          onConfirm={handleConfirmLogout}
          message="Are you sure you want to logout?"
        />
      </div>
    </>
  );
};

export default UserProfile;
