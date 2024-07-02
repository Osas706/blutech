import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

import "./Navbar.css";
import { ApiContext } from "../../context/apiContext";

const Navbar = () => {
  const {searchTerm, setSearchTerm, fetchProduct} = useContext(ApiContext);

  const handleSubmit = async(e) => {
    e.preventDefault();

    fetchProduct();
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src="../../../public/ulmimi.jpg" alt="" />
      </div>

      <div className="left">
        <form onSubmit={handleSubmit} className="search-bar">
            <input 
              type="text" 
              placeholder="Search by patients..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button type="submit">
              <CiSearch />
            </button>
        </form>

        <div className="profile">
          <IoIosNotifications className="icon" />
          <img src="../../../public/doctor.jpg" alt="" />
          <span>Deko</span>
          <FaAngleDown className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
