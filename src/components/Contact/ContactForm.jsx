import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AI from "../../axiosInstance";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNo: "",
      message: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      contactNo: Yup.string(),
      message: Yup.string(),
    }),
    onSubmit: async ({ name, email, contactNo, message, demoDate, Time }) => {
      try {
        const formData = {
          name,
          email,
          contactNo,
          message,
        };

        await AI.post("/admin/addContactForm", formData);
        toast.success("Successful!");
        resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Response not submitted");
      }
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, resetForm } =
    formik;
  return (
    <form onSubmit={handleSubmit} className="contact-validation-active">
      <div className="row">
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              className="form-control"
              value={values.name}
              type="text"
              name="name"
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              className="form-control"
              value={values.email}
              type="email"
              name="email"
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              className="form-control"
              value={values.contactNo}
              type="phone"
              name="contactNo"
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              placeholder="Your contact number"
            />
          </div>
        </div>
        {/* <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => handleChange(e)}
                            value={values.subject}
                            type="text"
                            name="subject">
                            <option>Choose a Service</option>
                            <option>Tax Management</option>
                            <option>Financial Advices</option>
                            <option>Risk Management</option>
                        </select>
                    </div>
                </div> */}
        <div className="col col-lg-12 col-12">
          <textarea
            className="form-control"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            value={values.message}
            type="text"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div className="submit-area">
        <button
          type="submit"
          onClick={() => {
            if (Object.keys(errors).length === 0) {
              return null;
            } else {
              toast.warn(errors[Object.keys(errors)[0]]);
            }
          }}
          className="theme-btn"
        >
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
