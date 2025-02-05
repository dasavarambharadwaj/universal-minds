import React from "react";

const AboutSection = () => {
  return (
    <div
      className="text-gray-900 dark:text-white flex flex-col md:flex-row p-8 bg-gray-700 scroll-mt-16"
      id="about"
    >
      <div className="md:w-1/2 p-4">
        <img
          src="/people.png"
          alt="Company Illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide innovative solutions that empower
          individuals and organizations to achieve their goals. We are committed
          to excellence, integrity, and making a positive impact in the world.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <p>
          We value collaboration, creativity, and continuous improvement. We
          believe in fostering a culture of respect, inclusivity, and
          transparency. Our team is dedicated to delivering exceptional results
          and exceeding expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
