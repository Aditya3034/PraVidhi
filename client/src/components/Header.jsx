import React, { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) =>{

    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);

    urlParams.set("searchTerm", searchTerm);

    const seaechQuery = urlParams.toString();

    navigate(`/search/${seaechQuery}`);

  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className=" font-Grifter  ">
      <div className=" flex justify-between items-center max-w-7xl mx-auto h-12 sm:h-24 px-4">
        <Link to="/">
          <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="">Pravidhi</span>
            {/* <span className=" ">Estate</span> */}
          </h1>
        </Link>

        

        <ul className=" flex gap-4">
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
