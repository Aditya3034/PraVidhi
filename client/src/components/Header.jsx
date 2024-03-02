import React, { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Logo from  "../assets/logo.png"

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  const userType = currentUser ? currentUser.usertype : null;

  // console.log(currentUser ? currentUser.usertype : 'No current user');

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  
  

  return (
    <header className=" fixed w-full font-Grifter bg-white shadow-sm">
      <div className=" flex justify-between items-center max-w-7xl mx-auto h-12 sm:h-24 px-4">
        <Link to={userType === "farmer" ? "/farmer-homepage" : userType === "warehouseOwner" ? "/warehouse-homepage" : userType === "retailor" ? "/retailor-homepage" : "/"}>
          <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap ">
            <img src={Logo} alt="logo" className=" h-10" />
            {/* <span className=" ">Estate</span> */}
          </h1>
        </Link>
        

        

        <ul className=" flex gap-4 items-center">
          <Link to="/">
            <li className=" hidden sm:inline  hover:underline ">
              Home
            </li>
          </Link>

          <Link to="about">
            <li className=" hidden sm:inline  hover:underline ">
              About
            </li>
          </Link>

          <Link to="profile">
            {currentUser ? (
              <img
                className=" rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="  hover:underline ">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
