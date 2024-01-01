// AddGenreForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AddGenreForm: React.FC = () => {
  const [genreName, setGenreName] = useState('');

  const handleAddGenre = async () => {
    try {
      if (!genreName) {
        toast.error('Genre name is required');
        return;
      }

      await axios.post('/api/admin/genre', { name: genreName });
      toast.success('Genre added successfully');
      setGenreName('');
    } catch (error: any) {
      toast.error('Error adding genre');
      console.error('Error adding genre:', error.message);
    }
  };

  return (
    <div className="my-4 bg-primary-color p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-black">Add Genre</h2>
      <input
        type="text"
        placeholder="Genre Name"
        value={genreName}
        onChange={(e) => setGenreName(e.target.value)}
        className="border border-black rounded-md p-2 mr-2 bg-transparent text-black"
      />
      <button
        onClick={handleAddGenre}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Add Genre
      </button>
    </div>
  );
};

export default AddGenreForm;
