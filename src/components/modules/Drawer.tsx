import React, { useState, useEffect } from 'react';

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const RightDrawer: React.FC<RightDrawerProps> = ({ isOpen, onClose, children }) => {
  const [drawerClasses, setDrawerClasses] = useState('transform translate-x-full');

  // Handle the opening and closing of the drawer
  useEffect(() => {
    setDrawerClasses(isOpen ? 'transform translate-x-0' : 'transform translate-x-full');

  }, [isOpen]);

  return (
    <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out ${drawerClasses}`}>
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default RightDrawer;
