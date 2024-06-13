import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { CgClose } from "react-icons/cg";


import {FaFacebook, FaDribbble, FaTwitter, FaBars} from "react-icons/fa"
import Modal from "./Modal";

const NavItem = [
  { path: "/", link: "Home" },
  { path: "/servicese", link: "Services" },
  { path: "/about", link: "About" },
  { path: "/blog", link: "Blog" },
  { path: "/contact", link: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpne] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);




  // madal detailse

  const Openmodal = () => {
    setModalOpen(true);
  }

  const Closemodal = () => {
    setModalOpen(false);
  }

  
  const toggleMenuOpen = () => {
    setMenuOpne(!isMenuOpen);
  }
  return (
    <header className="bg-[#0d0518] text-white">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl text-white font-bold">
          Muhammad <span className="text-orange-400">Rabbi</span>
        </a>

        {/* navItem for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden text-white">
          {NavItem.map((path, link) => {
            return (<li key={link}>
              <NavLink
                to={path.path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {path.link}
              </NavLink>
            </li> )
            
          })}
        </ul>



        {/* menu icons */}

        <div className="text-white lg:flex gap-4 items-center hidden">
            <a href="/" className=" hover:text-orange-500"><FaFacebook /></a>
            <a href="/" className=" hover:text-orange-500"><FaDribbble /></a>
            <a href="/" className=" hover:text-orange-500"><FaTwitter /></a>
            <button onClick={Openmodal} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">Log In</button>
        </div>


        {/* modal */}

        <Modal isOpen={modalOpen} isClose={Closemodal}/>

        {/* mobile menu btn display mobile screen */}

        <div className="md:hidden">
            <button onClick={toggleMenuOpen} className="cursor-pointer ">
              {
                isMenuOpen ? <CgClose className="w-5 h-5"/> : <FaBars className="w-5 h-5"/> 
              }            
            </button>
        </div>
      </nav>


      {/* mwnu item only for mobile */}

      <div className="">
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            NavItem.map(({path, link}) => <li className="text-black" key={path}>
              <NavLink onClick={toggleMenuOpen} to={path}>{link}</NavLink>
            </li>)
          }
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
