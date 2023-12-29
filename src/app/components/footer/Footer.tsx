import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi"; 

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        "Job Search",
        "Find a Job",
        "Labor Services",
        "Employee Testimonials",
        "Career Development",
      ],
    },
    {
      title: "Industries",
      links: [
        "Construction",
        "Manufacturing",
        "Hospitality",
        "Transportation",
        "Healthcare",
      ],
    },
    {
      title: "Skills & Training",
      links: [
        "Skill Development Programs",
        "Certifications",
        "Training Workshops",
        "Job Fairs",
        "Apprenticeships",
      ],
    },
    {
      title: "Initiatives",
      links: [
        "Employee Awards",
        "Career Opportunities",
        "Labor Unions",
        "Work Locations",
        "International Opportunities",
      ],
    },
  ];

  return (
    <footer className="bg-primary-color text-black p-6">
      <div className="flex justify-center items-center">
        <p className="mr-4">Connect with us on Social Media</p>
        <div className="flex">
          <FaFacebook className="text-2xl mx-2" />
          <FaInstagram className="text-2xl mx-2" />
          <FaTwitter className="text-2xl mx-2" />
        </div>
      </div>
      <div className="flex flex-wrap justify-around mt-4 text-black">
        {footerLinks.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col mx-4">
            {column.title && <h3 className="text-lg font-semibold mb-2">{column.title}</h3>}
            {column.links.map((link, linkIndex) => (
              <div key={linkIndex} className="flex items-center my-3">
                <Link href={`/jobs/${link}`} className="text-black text-xs lg:text-base">
                  {link}
                </Link>
                <FiChevronDown className="ml-2" /> {/* Replaced FaArrowDown with FiChevronDown */}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-white mt-6 pt-4 flex justify-center">
        <p className="text-sm">&copy; 2023 by www.LaborManagementApp.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
