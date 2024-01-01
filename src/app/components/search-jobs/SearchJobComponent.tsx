"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

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
export interface Genre {
  _id: string;
  name: string;
}
interface JobSearchProps {
  genres: Genre[] | null;
}
const JobSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [genres, setGenres] = useState<Genre[] | null>(null); // Add state for genres

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobsResponse, genresResponse] = await Promise.all([
          axios.get('/api/users/getAllJobs'),
          axios.get('/api/users/getAllGenre'),
        ]);
  
        console.log('Jobs Response:', jobsResponse.data);
        console.log('Genres Response:', genresResponse.data);
  
        setJobs(jobsResponse.data.data);
        setGenres(genresResponse.data.data);
      } catch (error) {
        console.error('Error loading jobs or genres:', error);
        setError('Error loading jobs or genres');
      }
    };
  
    fetchData();
  }, []);
  

  if (error) return <div>{error}</div>;
  if (!jobs) return <div>Loading...</div>;

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" bg-secondary-color text-primary-color">
      {/* Job Search Bar */}
      <div className="flex justify-center items-center text-black py-4 w-full">
        <input
          type="text"
          placeholder="Search Jobs..."
          className="border border-black rounded-md p-2 mr-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* You can add a search button or modify it as needed */}
      </div>

      {/* Additional Sections */}
      <div className="flex justify-between mx-10 my-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Featured Jobs</h2>
          {/* Add content for featured jobs section */}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Top Companies</h2>
          {/* Add content for top companies section */}
        </div>
      </div>
 {/* Job Cards Section */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} genres={genres} />
        ))}
      </div>
    </div>
  );
};

export default JobSearch;
