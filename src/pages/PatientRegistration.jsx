import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./PatientRegistration.scss";

const patientSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile Number is required"),
  age: Yup.number().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string().required("Address is required"),
});

const PatientRegistration = () => {
  return (
    <div className="patient-registration">
      <div className="patient-form-card">
        <h2>Patient Registration</h2>
        <p>Register a new patient</p>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            mobile: "",
            age: "",
            gender: "",
            address: "",
          }}
          validationSchema={patientSchema}
          onSubmit={(values) => {
            console.log(values);
            alert("Patient Registered Successfully");
          }}
        >
          <Form className="patient-form">
            <div className="form-group">
              <label>Full Name</label>
              <Field
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
              />
              <ErrorMessage
                name="fullName"
                component="span"
                className="error"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="error"
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <Field
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
              />
              <ErrorMessage
                name="mobile"
                component="span"
                className="error"
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <Field
                type="number"
                name="age"
                placeholder="Enter Age"
              />
              <ErrorMessage
                name="age"
                component="span"
                className="error"
              />
            </div>

            <div className="form-group">
              <label>Gender</label>

              <Field as="select" name="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>

              <ErrorMessage
                name="gender"
                component="span"
                className="error"
              />
            </div>

            <div className="form-group full-width">
              <label>Address</label>

              <Field
                as="textarea"
                rows="4"
                name="address"
                placeholder="Enter Address"
              />

              <ErrorMessage
                name="address"
                component="span"
                className="error"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Register Patient
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PatientRegistration;