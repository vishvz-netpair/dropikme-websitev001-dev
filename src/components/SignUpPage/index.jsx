import React, { useEffect, useState } from "react";
import "./style.scss";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { InputLabel, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import AI from "../../axiosInstance";
import { toast } from "react-toastify";

const SignUpPage = (props) => {
  const nav = useNavigate();
  const { state } = useLocation();
  const { planId, amount, discount } = state;
  const [business, setBusiness] = useState("");
  const [fetchData, setFetchData] = useState();

  const fetchBusinessTypes = async () => {
    try {
      const res = await AI.get("/admin/getAllBusinessType");
      setFetchData(res.data.BusinessTypes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBusinessTypes();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNo: "",
      businessType: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().max(50, "Too Long!").required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      contactNo: Yup.string()
        .max(50, "Too Long!")
        .required("Contact number is required"),
      businessType: Yup.string().required("Business type is required"),
    }),
    onSubmit: async ({ name, contactNo, email }) => {
      const formData = {
        name,
        email,
        contactNo,
        businessType: business,
        companyName: "",
        address: "",
        postCode: "",
        description: "",
        note: "",
        details: "",
        roleCode: "ORG",
      };
      // validateDropDown(business);
      await AI.post(`/master/organizationSignup?planId=${planId}`, formData)
        .then((res) => {
          if (res.status === 200) {
            toast.warn("Username already exists in our app");
          }
          if (res.status === 201) {
            toast.success("Sign up successful");
            nav("/payment", {
              state: {
                organizerId: res.data?.organization?._id,
                planId,
                amount,
                discount,
                password: res.data?.password,
              },
            });
          }
        })
        .catch((err) => {
          toast.error("Sign up failed");
        });
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, errors } = formik;

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Signup</h2>
        <p>Signup your account</p>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Full Name"
                value={values.name}
                variant="outlined"
                name="name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={values.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="contactNo"
                value={values.contactNo}
                variant="outlined"
                name="contactNo"
                label="contactNo"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel variant="outlined">Select Business Type</InputLabel>
              <Select
                className="inputOutline"
                fullWidth
                id="businessType"
                variant="outlined"
                name="businessType"
                label="Business Type"
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => {
                  handleChange(e);
                  setBusiness(e.target.value);
                }}
              >
                <MenuItem>Select Business Type</MenuItem>
                {fetchData?.map((item) => {
                  return (
                    <MenuItem key={item?._id} value={item?._id}>
                      {item?.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme"
                  type="submit"
                  onClick={() => {
                    if (Object.keys(errors).length === 0) {
                      return null;
                    } else {
                      toast.warn(errors[Object.keys(errors)[0]]);
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
