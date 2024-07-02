import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../../../public/ulmimi.jpg" alt="" />
      </div>

      <div className="left">
        <form className="search-bar">
          <input type="text" placeholder="Search by patients..." />

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
