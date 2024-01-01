import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import GlobalSelectComponent from '@/app/components/form/GlobalSelectComponent';
import { toast } from 'react-hot-toast';

interface Genre {
  _id: string;
  name: string;
}

interface JobFormProps {
  adminId: string;
}

const JobForm: React.FC<JobFormProps> = ({ adminId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'full-time', // Default type
    genre: '',
  });

  const [genreOptions, setGenreOptions] = useState<Genre[]>([]);

  useEffect(() => {
    // Fetch all genres from the backend API
    axios.get('/api/users/getAllGenre')
      .then(response => setGenreOptions(response.data.data))
      .catch(error => console.error('Error fetching genres:', error.message));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make a request to post the job
      const response = await axios.post('/api/admin/addjobs', { ...formData, createdBy: adminId });

      console.log('Job Posted:', response.data);
      toast.success("Job Posted Successfully");
      router.push(`/search-jobs`);
    } catch (error: any) {
      console.error('Error posting job:', error.message);
    }
  };

  return (
    <div className="bg-primary-color p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Post a Job:</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-semibold text-black ">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md text-black bg-transparent"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-semibold text-black ">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md text-black bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black ">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md text-black bg-transparent"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <GlobalSelectComponent
              label="Type"
              placeholder="Select job type"
              options={[
                { value: 'full-time', label: 'Full Time' },
                { value: 'internship', label: 'Internship' },
                { value: 'intraday-task', label: 'Intraday Task' },
                { value: 'part-time', label: 'Part Time' },
              ]}
              onChange={(selectedOption) =>
                setFormData({ ...formData, type: selectedOption?.value || '' })
              }
            />
          </div>
          <div className="w-1/2">
            <GlobalSelectComponent
              label="Genre"
              placeholder="Select a genre"
              options={genreOptions.map(genre => ({ value: genre._id, label: genre.name }))}
              onChange={(selectedOption) =>
                setFormData({ ...formData, genre: selectedOption?.value || '' })
              }
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
