import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 px-5 py-2 md:p-5 fixed w-full z-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Zijian Zhong
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#" className="text-gray-300 hover:text-white">Resume</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={!isOpen ? "M4 6h16M4 12h16m-16 6h16" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden pt-2 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <a href="#" className="block text-gray-300 hover:text-white p-2">Home</a>
        <a href="#" className="block text-gray-300 hover:text-white p-2">Skills</a>
        <a href="#" className="block text-gray-300 hover:text-white p-2">Projects</a>
        <a href="#" className="block text-gray-300 hover:text-white p-2">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;