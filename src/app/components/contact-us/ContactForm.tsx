"use client"
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let errors: any = {};
    let formIsValid = true;

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      formIsValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
      formIsValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      formIsValid = false;
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus('Submitting...');
      console.log(formData);

      // TODO: Add logic to handle form submission, e.g., sending feedback to the server
      // For now, just logging the form data

      // Reset form status
      setFormStatus('Send');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.id]: '',
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`w-full px-4 py-2 border ${formErrors.name && 'border-red-500'}`}
            type="text"
            id="name"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <span className="text-red-500 text-sm">{formErrors.name}</span>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`w-full px-4 py-2 border ${formErrors.email && 'border-red-500'}`}
            type="email"
            id="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <span className="text-red-500 text-sm">{formErrors.email}</span>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className={`w-full px-4 py-2 border ${formErrors.message && 'border-red-500'}`}
            id="message"
            required
            onChange={handleChange}
            value={formData.message}
          />
          <span className="text-red-500 text-sm">{formErrors.message}</span>
        </div>
        <button
          className="bg-primary-color text-white px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none"
          type="submit"
        >
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
