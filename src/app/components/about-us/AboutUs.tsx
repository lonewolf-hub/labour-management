// AboutUsComponent.tsx
import React from 'react';

const AboutUsComponent: React.FC = () => {
  return (
    <div className="bg-primary bg-opacity-60 text-gray-800 min-h-screen">
      <div className="flex flex-col items-center justify-center">

        {/* Banner Section with Animation */}
        <div className="relative mb-8 w-full">
          <img
            src="/assets/icon/aboutbanner.jpg" // Replace with your image
            alt="About Us"
            className="w-full h-auto "
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-black">
            <div className='bg-primary p-4 rounded-2xl bg-opacity-70'>
              <h1 className="text-4xl font-bold mb-2">About Our Job Search Platform</h1>
              <p>Your Gateway to Exciting Career Opportunities</p>
            </div>
          </div>
        </div>

        {/* Card Sections with FadeIn Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-10">

          {/* Description Card */}
          <div className="bg-secondary-color p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
            <p className="text-gray-800">
              At Job, we are committed to connecting talented individuals with their dream careers. With a passion for innovation and excellence, we strive to redefine the job search experience.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-secondary-color p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-800">
              Our mission is to empower individuals by providing a comprehensive job search platform. We aim to facilitate meaningful connections between employers and job seekers, fostering growth and success.
            </p>
          </div>

          {/* Services Card */}
          <div className="bg-secondary-color p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-800">
              - Diverse Job Opportunities <br />
              - Skill Development Programs <br />
              - Real-time Job Matching <br />
              - Personalized Career Insights
            </p>
          </div>

        </div>

        {/* Buttons Section with FadeIn Animation */}
        <div className="flex my-10 gap-10">

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Explore Jobs
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Learn New Skills
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Intraday Tasks
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Full-Time Jobs
          </button>

        </div>

        {/* Testimonials Section with Animation */}
        <div className="text-center mb-8 ">
          <h2 className="text-2xl font-bold mb-4">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

            {/* Testimonial 1 */}
            <div className="bg-secondary-color p-6 rounded-md shadow-md">
              <p className="text-gray-800">"This platform changed my life! I found the perfect job that aligns with my passion and skills."</p>
              <p className="font-bold">- Emily Johnson</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary-color p-6 rounded-md shadow-md">
              <p className="text-gray-800">"Incredible features and a user-friendly interface. Highly recommended for job seekers!"</p>
              <p className="font-bold">- Alex Rodriguez</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-secondary-color p-6 rounded-md shadow-md">
              <p className="text-gray-800">"The career insights provided by this platform helped me make informed decisions about my professional growth."</p>
              <p className="font-bold">- Jessica Smith</p>
            </div>

          </div>
        </div>

        {/* Quotes Section with Animation */}
        <div className="text-center mb-8 ">
          <h2 className="text-2xl font-bold mb-4">Inspirational Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

            {/* Quote 1 */}
            <div className="bg-secondary-color p-6 rounded-md shadow-md">
              <blockquote>"Success is not final, failure is not fatal: It is the courage to continue that counts."</blockquote>
              <p className="font-bold">- Winston Churchill</p>
            </div>

            {/* Quote 2 */}
            <div className="bg-secondary-color p-6 rounded-md shadow-md">
              <blockquote>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."</blockquote>
              <p className="font-bold">- Steve Jobs</p>
            </div>

            {/* Quote 3 */}
            <div className="bg-secondary-color p-6 rounded-md shadow-md">
              <blockquote>"The only way to do great work is to love what you do."</blockquote>
              <p className="font-bold">- Steve Jobs</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsComponent;
