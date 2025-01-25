import React, { useState, useRef, useEffect } from "react";

const Popup = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={popupRef}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {icon}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-2 w-max bg-white dark:bg-gray-500 border border-gray-300 dark:border-gray-700 rounded shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
          {children}
        </div>
      )}
    </div>
  );
};

export default Popup;
