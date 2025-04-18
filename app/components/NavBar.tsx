// import Image from "next/image";

// const NavBar = () => {
//     return(
//         <div className="relative grid grid-cols-3  items-center p-5 ">
//             <div className="flex items-center ">
//                 <Image src="/investmentgroup.png" alt="logo" width={120} height={120} />
//                 {/* <div className="">
//                     <h1 className="">VERA</h1>
//                     <p> Investment Group</p>
//                 </div> */}
    
//             </div>

           

//             <div className=" pl-15">
//                 <ul className="flex gap-15">
//                     <li>Home</li>
//                     <li>Companies</li>
//                     <li>Services</li>
//                     <li>Projects</li>
//                     <li>Blogs</li>
//                     <li>About</li>
                    
                    
//                 </ul>
//             </div>

//             <div className="absolute top-15 right-5">
//                 <button className="  p-2 rounded-lg">Contact Us</button>
//             </div>
           
//         </div>
//     )
// }

// export default NavBar;


'use client';
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/investmentgroup.png" alt="logo" width={100} height={100} />
          {/* Optional text */}
          {/* <div>
            <h1 className="text-xl font-bold">VERA</h1>
            <p className="text-sm text-gray-500">Investment Group</p>
          </div> */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Companies</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Projects</li>
          <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Companies</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Projects</li>
            <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li>
              <button className="hover:text-blue-500 cursor-pointer  py-2 rounded-lg  transition">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
