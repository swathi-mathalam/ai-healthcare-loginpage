import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">
        Menu
      </h3>

      <NavLink
        to="/dashboard"
        className="menu-item"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/patient-registration"
        className="menu-item"
      >
        Patient Registration
      </NavLink>

      <NavLink
        to="/doctors"
        className="menu-item"
      >
        Doctors
      </NavLink>

      <NavLink
        to="/appointments"
        className="menu-item"
      >
        Appointments
      </NavLink>

      <NavLink
        to="/laboratory"
        className="menu-item"
      >
        Laboratory
      </NavLink>

      <NavLink
        to="/pharmacy"
        className="menu-item"
      >
        Pharmacy
      </NavLink>

      <NavLink
        to="/settings"
        className="menu-item"
      >
        Settings
      </NavLink>
    </div>
  );
};

export default Sidebar;