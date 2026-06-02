import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        Welcome to MediConnect Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="cards-container">
        <div className="card">
          <h3>1,250</h3>
          <p>Total Patients</p>
        </div>

        <div className="card">
          <h3>85</h3>
          <p>Total Doctors</p>
        </div>

        <div className="card">
          <h3>320</h3>
          <p>Appointments</p>
        </div>

        <div className="card">
          <h3>150</h3>
          <p>Lab Reports</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="actions-section">
        <h3>Quick Actions</h3>

        <div className="button-group">
          <button
            onClick={() =>
              navigate("/patient-registration")
            }
          >
            + Patient Registration
          </button>

          <button
            onClick={() =>
              navigate("/doctor-registration")
            }
          >
            + Doctor Registration
          </button>

          <button
            onClick={() =>
              navigate("/appointments")
            }
          >
            Book Appointment
          </button>

          <button
            onClick={() =>
              navigate("/laboratory")
            }
          >
            Add Lab Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;