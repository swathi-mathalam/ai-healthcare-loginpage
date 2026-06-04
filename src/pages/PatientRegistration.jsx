import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./PatientRegistration.scss";

const patientSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),

  dob: Yup.date().required("Date of Birth is required"),

  age: Yup.number()
    .positive("Age must be positive")
    .required("Age is required"),

  gender: Yup.string().required("Gender is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile Number is required"),

  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required"),

  address: Yup.string().required("Address is required"),

  aadhaar: Yup.string()
    .matches(/^[0-9]{12}$/, "Aadhaar must be 12 digits")
    .required("Aadhaar Number is required"),

  emergencyNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Emergency number must be 10 digits")
    .required("Emergency Number is required"),

  bloodGroup: Yup.string().required("Blood Group is required"),

  insuranceProvider: Yup.string().required(
    "Insurance Provider is required"
  ),
});
const PatientRegistration = () => {
  return (
    <div className="patient-registration">
      <div className="patient-form-card">
        <h2 className="form-title">Patient Registration</h2>
  <p className="form-subtitle">Register a new patient</p>

        <Formik
          initialValues={{
            fullName: "",
            dob: "",
            age: "",
            gender: "",
            mobile: "",
            email: "",
            address: "",
            aadhaar: "",
            emergencyNumber: "",
            bloodGroup: "",
            insuranceProvider: "",
          }}
          validationSchema={patientSchema}
          onSubmit={(values) => {
            console.log(values);
            alert("Patient Registered Successfully");
          }}
        >
          <Form className="patient-form">
            <div className="form-group">
              <label>Full Name
                <span className="required">*</span>
              </label>
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
              <label>Email
                <span className="required">*</span>
              </label>
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
              <label>Date of Birth</label>
              <Field type="date" name="dob" />
              <ErrorMessage name="dob" component="span" className="error" />
            </div>


            <div className="form-group">
              <label>Mobile Number
                <span className="required">*</span>
              </label>
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
              <label>Aadhaar Number</label>
              <Field
                type="text"
                name="aadhaar"
                placeholder="Enter Aadhaar Number"
              />
              <ErrorMessage
                name="aadhaar"
                component="span"
                className="error"
              />
            </div>
            <div className="form-group">
              <label>Emergency Contact Number</label>
              <Field
                type="text"
                name="emergencyNumber"
                placeholder="Enter Emergency Contact Number"
              />
              <ErrorMessage
                name="emergencyNumber"
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
              <label>Gender
                <span className="required">*</span>
              </label>

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
            <div className="form-group">
              <label>Blood Group
                <span className="required">*</span>
              </label>
              <Field as="select" name="bloodGroup">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Field>
              <ErrorMessage
                name="bloodGroup"
                component="span"
                className="error"
              />
            </div>
            <div className="form-group">
              <label>Insurance Provider</label>
              <Field
                type="text"
                name="insuranceProvider"
                placeholder="Enter Insurance Provider"
              />
              <ErrorMessage
                name="insuranceProvider"
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