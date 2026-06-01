import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  sendOtp,
  loginWithId,
} from "../redux/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginType, setLoginType] =
    useState("phone");

  const [phone, setPhone] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [showOtp, setShowOtp] =
    useState(false);

  const [uniqueId, setUniqueId] =
    useState("");

  const [password, setPassword] =
    useState("");

  /* ================= OTP ================= */

  const handleGetOtp = () => {
    if (!phone) {
      alert(
        "Please enter phone number"
      );
      return;
    }

    dispatch(sendOtp(phone));

    setShowOtp(true);

    alert(
      "OTP Sent Successfully\nDummy OTP: 1234"
    );
  };

  const handleVerifyOtp = () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    if (otp === "1234") {
      alert(
        "Login Successful"
      );

      navigate("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  /* ================= UNIQUE LOGIN ================= */

  const handleLogin = () => {
    if (!uniqueId || !password) {
      alert(
        "Please enter Unique ID & Password"
      );
      return;
    }

    dispatch(
      loginWithId(
        uniqueId,
        password
      )
    );

    if (
      uniqueId === "admin" &&
      password === "1234"
    ) {
      alert(
        "Login Successful"
      );

      navigate("/dashboard");
    } else {
      alert(
        "Invalid Credentials"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT SECTION */}
        <div className="left-section">
          <div className="left-content">
            <span className="badge">
              AI Powered Telemedicine Platform
            </span>

            <h1>
              One Secure Access For
              <br />
              Every Healthcare User
            </h1>

            <p>
              Patients, doctors, pharmacies,
              laboratories, and insurance
              providers connected through one
              intelligent healthcare ecosystem.
            </p>
          </div>

          <div className="feature-cards">
            <div className="feature-card">
              <h3>24/7</h3>
              <span>
                Healthcare Access
              </span>
            </div>

            <div className="feature-card">
              <h3>100%</h3>
              <span>
                Encrypted Login
              </span>
            </div>

            <div className="feature-card">
              <h3>AI</h3>
              <span>AI Access</span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">
          <div className="header-section">
            <div className="logo-section">
              <img
                src="https://png.pngtree.com/png-clipart/20250618/original/pngtree-green-3d-health-medical-heart-icon-png-image_21204349.png"
                alt="medical-logo"
                className="logo"
              />

              <h3>MediConnect</h3>

              <span>Healthcare Ecosystem</span>
            </div>

            <h2 className="welcome-title">
              Welcome back
            </h2>

            <p className="subtitle">
              Continue securely using your phone number or Unique ID.
            </p>
          </div>
          {/* Toggle Buttons */}
          <div className="toggle-buttons">
            <button
              className={
                loginType ===
                  "phone"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setLoginType(
                  "phone"
                )
              }
            >
              Phone Number
            </button>

            <button
              className={
                loginType ===
                  "unique"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setLoginType(
                  "unique"
                )
              }
            >
              Unique ID
            </button>
          </div>

          {/* PHONE LOGIN */}
          {loginType ===
            "phone" && (
              <div className="form-section">
                <label>
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                  }
                />

                {!showOtp ? (
                  <button
                    className="continue-btn"
                    onClick={
                      handleGetOtp
                    }
                  >
                    Get OTP
                  </button>
                ) : (
                  <>
                    <label>
                      Enter OTP
                    </label>

                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) =>
                        setOtp(
                          e.target.value
                        )
                      }
                    />

                    <button
                      className="continue-btn"
                      onClick={
                        handleVerifyOtp
                      }
                    >
                      Verify OTP
                    </button>
                  </>
                )}
              </div>
            )}

          {/* UNIQUE LOGIN */}
          {loginType ===
            "unique" && (
              <div className="form-section">
                <label>
                  Unique ID
                </label>

                <input
                  type="text"
                  placeholder="Enter Unique ID"
                  value={
                    uniqueId
                  }
                  onChange={(e) =>
                    setUniqueId(
                      e.target.value
                    )
                  }
                />

                <label>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={
                    password
                  }
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />

                <button
                  className="continue-btn"
                  onClick={
                    handleLogin
                  }
                >
                  Login
                </button>
              </div>
            )}

          <div className="security-box">
            <h4>
              🔒 Secure &
              HIPAA Ready
            </h4>

            <p>
              Your healthcare
              information is
              protected with
              enterprise-grade
              encryption and
              secure
              authentication.
            </p>
          </div>

          <p className="signup-text">
            Don’t have an
            account?
            <span>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;