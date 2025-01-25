import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div
      className="text-gray-900 dark:text-white container mx-auto p-6 scroll-mt-16"
      id="contact"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                Message
              </label>
              <textarea
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>
            <button
              disabled
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
              coming soon...
            </button>
          </form>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1283138286266!2d78.0795371!3d17.589942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbb173b71b57b%3A0x0!2zMTfCsDM1JzIzLjgiTiA3OMKwMDQnNTUuNiJF!5e0!3m2!1sen!2sin!4v1633046400000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Business Location"
          ></iframe>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mt-4 md:mt-0">
          {/* <p className="flex items-center">
            <FaPhone className="mr-2" /> +91 1234567890
          </p> */}
          <p className="flex items-center">
            <FaEnvelope className="mr-2" /> universalmindsindia@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
