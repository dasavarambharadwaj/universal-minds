import React from "react";

const IntroSection = () => {
  return (
    <section
      id="home"
      className="relative  scroll-mt-16 flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-black"
    >
      <div className="text-center text-white dark:text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 p-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-yellow-500">
          Simplifying Software and Accounting Needs
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We provide top-notch solutions to streamline your business processes.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
