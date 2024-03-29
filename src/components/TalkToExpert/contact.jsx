import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AI from "../../axiosInstance";
const Contact = () => {
  toast.configure();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNo: "",
      details: "",
      demoDate: "",
      Time: "",
    },
    validateOnMount: true,

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      contactNo: Yup.string(),
      details: Yup.string(),
      demoDate: Yup.string().required(),
      Time: Yup.string().required(),
    }),
    onSubmit: async ({ name, email, contactNo, details, demoDate, Time }) => {
      try {
        const formData = {
          name: name,
          email: email,
          contactNo: contactNo,
          details: details,
          demoDate: demoDate,
          Time: Time,
        };

        await AI.post("/admin/addAdminRequest", formData);
        toast.success("Successful!");
      } catch (error) {
        console.log(error);
        toast.error("Response not submitted");
      }
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors } = formik;
  return (
    <form onSubmit={handleSubmit} className="contact-validation-active">
      <div className="row">
        <div className="col col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              className="form-control"
              value={values.name}
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="col col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              className="form-control"
              value={values.email}
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              className="form-control"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              value={values.contactNo}
              type="text"
              name="contactNo"
              placeholder="Contact Number"
            ></input>
          </div>
        </div>

        <div className="col fullwidth col-lg-12">
          <textarea
            className="form-control"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.details}
            type="text"
            name="details"
            placeholder="details"
          ></textarea>
        </div>

        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              className="form-control"
              id="demoDate"
              name="demoDate"
              type="text"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              value={values.demoDate}
              placeholder="Please enter Date"
              onFocus={(e) => (e.target.type = "date")}
            />
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              className="form-control"
              id="Time"
              name="Time"
              type="text"
              onChange={handleChange}
              value={values.Time}
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
            />
          </div>
        </div>
      </div>
      <div className="submit-area">
        <button
          type="submit"
          className="theme-btn"
          onClick={() => {
            if (Object.keys(errors).length === 0) {
              return null;
            } else {
              toast.warn(errors[Object.keys(errors)[0]]);
            }
          }}
        >
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default Contact;
