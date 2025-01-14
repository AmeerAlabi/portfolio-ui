import React, { useState } from 'react';
import burger from '../assets/menu.png';
import close from '../assets/cls.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className='p-4'>
        {/* Render the burger icon for small screens */}
        <div className="md:block hidden">
          <img src={toggle ? close : burger} alt="" onClick={toggleMenu} className='w-[30px] cursor-pointer' />
        </div>

        {/* Render the menu items for large screens */}
        <ul className={`flex md:hidden justify-end gap-5 font-[500] transition duration-500 ease-in-out `}>
          <li className='md:overflow-hidden mr-12 hover:text-pink-500 text-dark'><Link to="/blog">Works</Link></li>
          <li className='md:overflow-hidden mr-12 hover:text-pink-500 text-dark'><Link to="/posts">Blog</Link></li>
          <li className='md:overflow-hidden mr-12 hover:text-pink-500 text-dark'><Link to="/Footer">Contact</Link></li>
        </ul>

        {/* Render the menu items for small screens */}
        <ul className={`transition duration-500 ease-in-out ${toggle ? 'block opacity-100' : 'hidden'} flex  items-center justify-center  shadow-md p-6 font-bold`}>
          <li className='md:overflow-hidden mr-12  bg-pink-500 text-white px-3 py-2 rounded-lg'><Link to="/blog">Works</Link></li>
          <li className='md:overflow-hidden mr-12 bg-pink-500 text-white px-3 py-2 rounded-lg'><Link to="/posts">Blog</Link></li>
          <li className='md:overflow-hidden mr-12 bg-pink-500 text-white px-3 py-2 rounded-lg'><Link to="/Footer">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
