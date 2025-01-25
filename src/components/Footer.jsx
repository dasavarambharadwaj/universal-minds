import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 scroll-mt-16" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-blue-600 pointer-events-none"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-blue-400 pointer-events-none"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-pink-600 pointer-events-none"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <p className="mb-2">Sangareddy, Telangana, India</p>
            <p className="mb-2">Email: universalmindsindia@gmail.com</p>
            {/* <p>Phone: (123) 456-7890</p> */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2025 Universal Minds. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
