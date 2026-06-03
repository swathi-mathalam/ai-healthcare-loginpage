import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import {
  Users,
  CalendarDays,
  Stethoscope,
  Activity,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back to MediConnect Healthcare System</p>
        </div>

        <button
          className="register-btn"
          onClick={() => navigate("/patients")}
        >
          Register Patient
        </button>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-cards">

        <div className="dashboard-card patients">
          <Users size={35} />

          <h2>1,250</h2>
          <p>Total Patients</p>
        </div>

        <div className="dashboard-card appointments">
          <CalendarDays size={35} />

          <h2>340</h2>
          <p>Appointments</p>
        </div>

        <div className="dashboard-card doctors">
          <Stethoscope size={35} />

          <h2>85</h2>
          <p>Doctors</p>
        </div>

        <div className="dashboard-card reports">
          <Activity size={35} />

          <h2>68</h2>
          <p>Reports</p>
        </div>

      </div>

      {/* Recent Data */}
      <div className="dashboard-grid">

        <div className="recent-card">
          <h3>Recent Patients</h3>

          <div className="list-item">
            <span>John Doe</span>
            <small>10 mins ago</small>
          </div>

          <div className="list-item">
            <span>Sarah Smith</span>
            <small>20 mins ago</small>
          </div>

          <div className="list-item">
            <span>David Johnson</span>
            <small>1 hour ago</small>
          </div>
        </div>

        <div className="recent-card">
          <h3>Recent Logins</h3>

          <div className="list-item">
            <span>Admin</span>
            <small>09:30 AM</small>
          </div>

          <div className="list-item">
            <span>Doctor</span>
            <small>10:15 AM</small>
          </div>

          <div className="list-item">
            <span>Receptionist</span>
            <small>11:00 AM</small>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;