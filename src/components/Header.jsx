import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Dashboard</h2>
        <p>Welcome to MediConnect Healthcare System</p>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;