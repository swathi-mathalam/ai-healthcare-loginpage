import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "./Signup.scss";

const SignupSchema = Yup.object({
    fullName: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Full Name is required"),

    phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid phone number")
        .required("Phone Number is required"),

    userType: Yup.string().required("Please select user type"),

    password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),

    terms: Yup.boolean().oneOf([true], "Accept Terms & Conditions"),
});

const Signup = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (values) => {
        console.log(values);

        alert("Account Created Successfully");

        setTimeout(() => {
            navigate("/");
        }, 1500);
    };

    return (
        <div className="signup-page">
            <div className="signup-card">
                {/* Logo */}
                <div className="logo-section">
                    <img
                        src="https://thumbs.dreamstime.com/b/green-heart-symbol-medical-ekg-graph-90880389.jpg"

                        alt="medical-logo"
                        className="logo"
                    />

                    <h3>
                        Medi Connect
                        <br />
                        Healthcare Ecosystem
                    </h3>
                </div>

                {/* Heading */}
                <div className="heading-section">
                    <h2>Create your account ✅</h2>

                    <p>
                        Join the MediConnect ecosystem and access secure digital healthcare
                        services.
                    </p>
                </div>

                {/* Form */}
                <Formik
                    initialValues={{
                        fullName: "",
                        phoneNumber: "",
                        userType: "",
                        password: "",
                        confirmPassword: "",
                        terms: false,
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        {/* Full Name */}
                        <div className="form-group">
                            <label>Full Name
                                <span className="required">*</span>
                            </label>

                            <div className="input-wrapper">


                                <Field
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <ErrorMessage
                                name="fullName"
                                component="div"
                                className="error"
                            />
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label>Phone Number
                                <span className="required">*</span>
                            </label>

                            <div className="input-wrapper">


                                <Field
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <ErrorMessage
                                name="phoneNumber"
                                component="div"
                                className="error"
                            />
                        </div>

                        {/* User Type */}
                        <div className="form-group">
                            <label>User Type</label>

                            <div className="input-wrapper">


                                <Field as="select" name="userType">
                                    <option value="">Select User Type</option>
                                    <option value="Patient">Patient</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Pharmacy">Pharmacy</option>
                                    <option value="Laboratory">Laboratory</option>
                                </Field>
                            </div>

                            <ErrorMessage
                                name="userType"
                                component="div"
                                className="error"
                            />
                        </div>

                        {/* Password */}
                        <div className="form-group">
                            <label>Password
                                <span className="required">*</span>
                            </label>

                            <div className="input-wrapper">
                                

                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Create a password"
                                />

                                <span
                                    className="eye-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <VisibilityOffIcon />
                                    ) : (
                                        <VisibilityIcon />
                                    )}
                                </span>
                            </div>

                            <ErrorMessage
                                name="password"
                                component="div"
                                className="error"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="form-group">
                            <label>Confirm Password</label>

                            <div className="input-wrapper">


                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                />

                                <span
                                    className="eye-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <VisibilityOffIcon />
                                    ) : (
                                        <VisibilityIcon />
                                    )}
                                </span>
                            </div>

                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="error"
                            />
                        </div>

                        {/* Terms */}
                        <div className="terms">
                            <label>
                                <Field type="checkbox" name="terms" />
                                I agree to the Terms & Conditions and Privacy Policy
                            </label>

                            <ErrorMessage
                                name="terms"
                                component="div"
                                className="error"
                            />
                        </div>

                        {/* Button */}
                        <button type="submit" className="create-btn">
                            Create Account
                        </button>

                        <div className="signin-link">
                            Already have an account?
                            <Link to="/login"> Sign In</Link>
                        </div>
                    </Form>
                </Formik>

                {/* Security Card */}
                <div className="security-card">
                    <div className="shield-icon">🛡️</div>

                    <div>
                        <h4>Secure & HIPAA Ready</h4>

                        <p>
                            Your healthcare information is protected with enterprise-grade
                            encryption and security.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer-links">
                    <Link to="/">Privacy Policy</Link>
                    <span> • </span>
                    <Link to="/">Terms of Service</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;


