import React from 'react';

const HomeComponent: React.FC = () => {
  return (
    <div className="bg-secondary-color text-primary-color min-h-screen">
      <div className="flex flex-col">

        {/* Hero Section */}
        <div className="relative mb-8 overflow-hidden">
          <img
            src="/assets/icon/banner.jpg"
            alt="Job Search"
            className="w-full"
            style={{ objectFit: 'cover', height: '500px' }}
          />
        </div>

        {/* Our Services Section */}
        <div className='flex justify-center items-center text-black my-4'>
          <h2 className="text-3xl font-bold mb-4 ">Explore Job Opportunities</h2>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-black mx-10">
          <div className="p-4 border border-black rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Job Search</h2>
            <p>Find your dream job with our advanced job search features.</p>
          </div>
          <div className="p-4 border border-black rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">24/7 Access</h2>
            <p>Access job listings and career resources 24/7 at your convenience.</p>
          </div>
          <div className="p-4 border border-black rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Professional Networking</h2>
            <p>Connect with professionals and expand your professional network.</p>
          </div>
        </div>

        {/* Job Search Section */}
        <div className='flex justify-center items-center my-5'>
          <h2 className="text-3xl font-bold mb-4  text-black">Start Your Job Search</h2>
        </div>

        {/* Job Search Form and Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mx-10">
          {/* Left Section with Job Search Image */}
          <div className="p-4 border border-black rounded-md shadow-md">
            <img
              src="/assets/icon/jobsearch.jpg"
              alt="Job Search"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Right Section with Job Search Form and Button */}
          <div className="p-4 items-center justify-center flex flex-col border border-black rounded-md shadow-md">
            <div className='flex justify-center items-center'>
              <h2 className="text-3xl font-bold mb-4  text-black">Find Your Perfect Job</h2>
            </div>
            <div className='flex justify-center'>
              <input
                type="text"
                placeholder="Enter Job Title or Keywords"
                className="border border-black rounded-md p-2 mr-2"
              />
              <button
                className="bg-primary-color text-black px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none"
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Career Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-black  mx-10">
          {/* Career Resources Section 1 */}
          <div className="p-4 border border-primary-color rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Career Development</h2>
            <p>Explore resources for career development and skill enhancement.</p>
          </div>
          {/* Career Resources Section 2 */}
          <div className="p-4 border border-primary-color rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Training Programs</h2>
            <p>Enroll in training programs to enhance your skills and qualifications.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-8 mx-10">
          <h2 className="text-3xl font-bold mb-4 text-black">Success Stories</h2>

          {/* Testimonial Slider */}
          <div className="flex items-center justify-center">
            {/* Testimonial Card 1 */}
            <div className=" p-4 mx-2 rounded-md shadow-md w-1/2">
              <img
                src="/assets/icon/customer1.jpg"
                alt="Success Story 1"
                className="mx-auto mb-4 "
              />
              <p className="text-gray-800">"I found my dream job through this platform! The resources and support are amazing."</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className=" p-4 mx-2 rounded-md shadow-md w-1/2">
              <img
                src="/assets/icon/customer2.jpg"
                alt="Success Story 2"
                className=" mx-auto mb-4 "
              />
              <p className="text-gray-800">"The professional network I built here played a crucial role in my career growth."</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeComponent;
