import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./style.scss";
import { InputLabel, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import AI from "../../axiosInstance";

const SignUpPage = (props) => {
  const nav = useNavigate();
  const { state } = useLocation();
  const { planId, amount, discount } = state;
  const [resStatus, setResStatus] = useState();
  const [businessType, setBusinessType] = useState("xx");
  const [fetchData, setFetchData] = useState();
  const [isValid, setIsValid] = useState(false);

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
      email: "",
      name: "",
      contactNo: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().min(5, "Too Short!").email().required("Required"),
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      contactNo: Yup.string()
        .min(7, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    }),
    onSubmit: async ({ name, contactNo, email }) => {
      const formData = {
        email,
        name,
        contactNo,
        businessType,
        companyName: "",
        address: "",
        postCode: "",
        description: "",
        note: "",
        details: "",
        roleCode: "ORG",
      };
      validateDropDown();
      console.log(formData);
      await AI.post(`/master/organizationSignup?planId=${planId}`, formData)
        .then((res) => {
          if (res.status === 200) {
            setResStatus(res.status);
          }
          if (res.status === 201) {
            setResStatus(201);
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
          setResStatus(500);
        });
    },
  });

  const { values, handleBlur, handleChange, handleSubmit, errors } = formik;

  const validateDropDown = (value) => {
    if (businessType === "" || businessType === undefined) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        {resStatus === 200 && <div>Username already exists in our app</div>}
        {resStatus === 500 && <div>Server Error</div>}

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
              {errors.name && <span>{errors.name}</span>}
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
              {errors.email && <span>{errors.email}</span>}
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
              {errors.contactNo && <span>{errors.contactNo}</span>}
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
                  setBusinessType(e.target.value);
                  validateDropDown(e.target.value);
                }}
              >
                <MenuItem>Select Business Type</MenuItem>
                {fetchData?.map((item) => {
                  return <MenuItem value={item?._id}>{item?.name}</MenuItem>;
                })}
              </Select>
              {!isValid && <span>Please select Business Type</span>}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme"
                  type="submit"
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
