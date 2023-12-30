// JobSearchComponent.tsx
import React from 'react';
import Link from 'next/link';

const JobSearchComponent: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '16px', color: '#333' }} className='bg-secondary-color'>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Title Section with Animation */}
        <div className="text-center mb-8 ">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Explore Job Opportunities</h1>
          <p>Find the perfect job that suits your skills and career goals</p>
        </div>

        {/* Job Search Buttons Section with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-10 ">
          <Link href="/search-jobs">
            <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 transform hover:scale-105 bg-primary-color">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Search Jobs</h2>
              <p>Explore available job opportunities based on your preferences and skills.</p>
            </div>
          </Link>

          <Link href="/learn-new-skills">
            <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 transform hover:scale-105 bg-primary-color">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Learn New Skills</h2>
              <p>Enhance your skillset with our curated learning programs and courses.</p>
            </div>
          </Link>

          <Link href="/intraday-tasks">
            <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 transform hover:scale-105 bg-primary-color">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Intraday Tasks</h2>
              <p>Find short-term, daily tasks that match your expertise and availability.</p>
            </div>
          </Link>

          <Link href="/full-time-jobs">
            <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 transform hover:scale-105 bg-primary-color">
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Full-Time Jobs</h2>
              <p>Explore career opportunities for full-time positions in various industries.</p>
            </div>
          </Link>
        </div>

        {/* Additional Sections with FadeIn Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 ">
          <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 bg-primary-color transform hover:scale-105">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Career Development Roadmaps</h2>
            <p>Access personalized career development roadmaps to guide you towards achieving your professional goals.</p>
          </div>

          <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 bg-primary-color transform hover:scale-105">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Professional Networking</h2>
            <p>Connect with industry professionals and expand your network for career growth opportunities.</p>
          </div>

          <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 bg-primary-color transform hover:scale-105">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Job Application Tips</h2>
            <p>Get valuable tips on crafting an effective resume, preparing for interviews, and succeeding in job applications.</p>
          </div>

          <div style={{ padding: '16px', border: '1px solid #3490dc', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }} className="hover:bg-gray-200 bg-primary-color transform hover:scale-105">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Remote Work Opportunities</h2>
            <p>Explore job opportunities that offer remote work options, providing flexibility in your career.</p>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="text-center mt-8">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest job opportunities and career insights.</p>

          {/* Replace the form action with your actual newsletter subscription endpoint */}
          <form action="/subscribe-newsletter" method="post" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' }}>
            <input type="email" name="email" placeholder="Your email address" style={{ padding: '8px', margin: '8px 0', width: '100%', borderRadius: '0.375rem' }} required />
            <button type="submit" style={{ backgroundColor: '#3490dc', color: '#fff', padding: '8px 16px', borderRadius: '0.375rem', cursor: 'pointer', transition: 'background-color 0.3s', border: 'none' }} className="hover:bg-opacity-80 focus:outline-none my-4">
              Subscribe
            </button>
          </form>
        </div>

        {/* Button for Redirection to Career Development Page */}
        <div className="text-center my-5">
          <Link href="/career-development">
            <button style={{ backgroundColor: '#3490dc', color: '#fff', padding: '8px 16px', borderRadius: '0.375rem', cursor: 'pointer', transition: 'background-color 0.3s' }} className="hover:bg-opacity-80 focus:outline-none">
              Explore Career Development
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default JobSearchComponent;
