import React from "react";
import Popup from "./Popup";

const Header = () => {
  const Content = (
    <>
      <a
        href="#services"
        className="dark:text-white text-gray-700 md:text-gray-200 hover:text-gray-900"
      >
        Services
      </a>
      <a
        href="#about"
        className="dark:text-white text-gray-700 md:text-gray-200 hover:text-gray-900"
      >
        About Us
      </a>
      <a
        href="#contact"
        className="dark:text-white text-gray-700 md:text-gray-200 hover:text-gray-900"
      >
        Contact
      </a>
    </>
  );
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a className="flex items-center" href="#home">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-yellow-500 flex items-center">
            Universal Minds
          </h1>
        </a>

        <nav className={"md:flex hidden space-x-6"}>{Content}</nav>
        <div className="md:hidden relative">
          <Popup
            icon={
              <button className=" focus:outline-none cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            }
          >
            <nav className={"flex flex-col space-x-6 gap-2"}>{Content}</nav>
          </Popup>
        </div>
      </div>
    </header>
  );
};

export default Header;
