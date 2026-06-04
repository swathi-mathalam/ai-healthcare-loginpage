import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import {
  sendOtp,
  loginWithId,
} from "../redux/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginType, setLoginType] =
    useState("phone");

  const [showOtp, setShowOtp] =
    useState(false);

  const [phoneNumber, setPhoneNumber] =
    useState("");

  /* ================= VALIDATION ================= */

  const phoneSchema = Yup.object({
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^[0-9]{10}$/,
        "Enter valid 10 digit phone number"
      ),
  });

  const otpSchema = Yup.object({
    otp: Yup.string()
      .required("OTP is required")
      .matches(
        /^[0-9]{4}$/,
        "OTP must be 4 digits"
      ),
  });

  const uniqueSchema = Yup.object({
    uniqueId: Yup.string().required(
      "Unique ID is required"
    ),

    password: Yup.string()
      .required("Password is required")
      .min(
        4,
        "Minimum 4 characters"
      ),
  });

  /* ================= OTP ================= */

  const handleGetOtp = (
    values
  ) => {
    dispatch(
      sendOtp(values.phone)
    );

    setPhoneNumber(
      values.phone
    );

    setShowOtp(true);

    alert(
      "OTP Sent Successfully\nDummy OTP: 1234"
    );
  };

  const handleVerifyOtp = (
    values
  ) => {
    if (
      values.otp === "1234"
    ) {
      alert(
        "Login Successful"
      );

      navigate(
        "/dashboard"
      );
    } else {
      alert("Invalid OTP");
    }
  };

  /* ================= UNIQUE LOGIN ================= */

  const handleLogin = (
    values
  ) => {
    dispatch(
      loginWithId(
        values.uniqueId,
        values.password
      )
    );

    if (
      values.uniqueId ===
      "admin" &&
      values.password ===
      "1234"
    ) {
      alert(
        "Login Successful"
      );

      navigate(
        "/dashboard"
      );
    } else {
      alert(
        "Invalid Credentials"
      );
    }
  };

  let formContent = null;

  /* ================= PHONE LOGIN ================= */

  if (
    loginType === "phone"
  ) {
    let otpContent =
      null;

    if (!showOtp) {
      otpContent = (
        <button
          type="submit"
          className="continue-btn"
        >
          Get OTP
        </button>
      );
    }

    if (showOtp) {
      otpContent = (
        <>
          <label>
            Enter OTP
          </label>

          <Field
            type="text"
            name="otp"
            placeholder="Enter OTP"
          />

          <ErrorMessage
            name="otp"
            component="div"
            className="error"
          />

          <button
            type="submit"
            className="continue-btn"
          >
            Verify OTP
          </button>
        </>
      );
    }

    formContent = (
      <Formik
        initialValues={{
          phone: "",
          otp: "",
        }}
        validationSchema={
          showOtp
            ? otpSchema
            : phoneSchema
        }
        onSubmit={(
          values
        ) => {
          if (
            !showOtp
          ) {
            handleGetOtp(
              values
            );
          } else {
            handleVerifyOtp(
              values
            );
          }
        }}
      >
        <Form className="form-section">
          <label>
            Phone Number
          </label>

          <Field
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
          />

          <ErrorMessage
            name="phone"
            component="div"
            className="error"
          />

          {otpContent}
        </Form>
      </Formik>
    );
  }

  /* ================= UNIQUE LOGIN ================= */

  if (
    loginType === "unique"
  ) {
    formContent = (
      <Formik
        initialValues={{
          uniqueId: "",
          password: "",
        }}
        validationSchema={
          uniqueSchema
        }
        onSubmit={
          handleLogin
        }
      >
        <Form className="form-section">
          <label>
            Unique ID
          </label>

          <Field
            type="text"
            name="uniqueId"
            placeholder="Enter Unique ID"
          />

          <ErrorMessage
            name="uniqueId"
            component="div"
            className="error"
          />

          <label>
            Password
          </label>

          <Field
            type="password"
            name="password"
            placeholder="Enter Password"
          />

          <ErrorMessage
            name="password"
            component="div"
            className="error"
          />

          <button
            type="submit"
            className="continue-btn"
          >
            Login
          </button>
        </Form>
      </Formik>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        {/* LEFT SECTION */}

        <div className="left-section">
          <div className="left-content">
            <span className="badge">
              AI Powered
              Telemedicine
              Platform
            </span>

            <h1>
              One Secure
              Access For
              <br />
              Every
              Healthcare User
            </h1>

            <p>
              Patients,
              doctors,
              pharmacies,
              laboratories,
              and insurance
              providers
              connected
              through one
              intelligent
              healthcare
              ecosystem.
            </p>
          </div>

          <div className="feature-cards">
            <div className="feature-card">
              <h3>
                24/7
              </h3>

              <span>
                Healthcare
                Access
              </span>
            </div>

            <div className="feature-card">
              <h3>
                100%
              </h3>

              <span>
                Encrypted
                Login
              </span>
            </div>

            <div className="feature-card">
              <h3>AI</h3>

              <span>
                AI Access
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="right-section">
          <div className="header-section">
            <div className="logo-section">
              <img
                src="https://thumbs.dreamstime.com/b/green-heart-symbol-medical-ekg-graph-90880389.jpg"
                alt="medical-logo"
                className="logo"
              />

              <h6>
                Medi Connect
                <br />
                Healthcare
                Ecosystem
              </h6>
            </div>

            <h2 className="welcome-title">
              Welcome back
            </h2>

            <p className="subtitle">
              Continue
              securely using
              your phone
              number or
              Unique ID.
            </p>
          </div>

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

          {formContent}

          <div className="security-box">
            <h4>
              🔒 Secure &
              HIPAA Ready
            </h4>

            <p>
              Your
              healthcare
              information is
              protected with
              enterprise-grade
              encryption and
              secure
              authentication.
            </p>
          </div>

          <div className="signup-container">
            <span>
              Don't have an
              account?
            </span>
            <Link to="/signup"> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;