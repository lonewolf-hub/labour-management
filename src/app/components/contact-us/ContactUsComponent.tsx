// ContactUsComponent.tsx
import React from 'react';
import ContactForm from './ContactForm';

const ContactUsComponent: React.FC = () => {
  return (
    <div className="bg-secondary-color text-primary-color min-h-screen">
      <div className="flex flex-col">

        {/* Banner Section */}
        <div className=" mb-8">
          <img
            src="/assets/icon/contactus.png"
            alt="Contact Us"
            className="w-full"
            style={{ objectFit: 'cover', height: '300px' }}
          />
        </div>
        <div className='flex mx-auto gap-10'>
        <div className="flex flex-col mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <ContactForm />
        </div>
        <div className="flex flex-col">
        <img
            src="/assets/icon/contactform.jpg"
            alt="Contact Us"
            className="h-[510px] rounded-lg"
          />
        </div>
        </div>
       

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mx-40 text-black my-6">
          <div className="p-4 border border-white rounded-md">
            <h2 className="text-2xl font-bold mb-2">Explore Job Opportunities</h2>
            <p>Discover exciting job opportunities tailored to your skills and interests.</p>
          </div>
          <div className="p-4 border border-white rounded-md">
            <h2 className="text-2xl font-bold mb-2">Labor Management Services</h2>
            <p>Our labor management services provide efficient workforce solutions for businesses.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUsComponent;
