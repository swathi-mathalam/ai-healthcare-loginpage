import React from "react";
import "./Sidebar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  CreditCard,
  FileText,
  LogOut,
  HeartPulse,
} from "lucide-react";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div>
        <div className="sidebar-logo">
          <div className="logo-box">
            <HeartPulse size={28} />
          </div>

          <div>
            <h2>MediConnect</h2>
            <p>Healthcare Ecosystem</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="sidebar-menu">

          <NavLink to="/dashboard">
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/patients">
            <Users size={18} />
            Patients
          </NavLink>

          <NavLink to="/appointments">
            <Calendar size={18} />
            Appointments
          </NavLink>

          <NavLink to="/consultation">
            <CreditCard size={18} />
            Consultation
          </NavLink>

          <NavLink to="/reports">
            <FileText size={18} />
            Records
          </NavLink>

        </nav>
      </div>

      {/* Logout */}
      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;