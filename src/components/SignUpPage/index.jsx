import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { MenuItem } from "@material-ui/core";

const SignUpPage = (props) => {
  const nav = useNavigate();
  const { state } = useLocation();
  const { planId, amount, discount } = state;
  const [value, setValue] = useState({
    email: "",
    name: "",
    contactNo: "",
    businessType: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        email: "",
        name: "",
        contactNo: "",
        businessType: "",
      });
      validator.hideMessages();
      toast.success("Registration Complete successfully!");
      nav("/payment", {
        state: {
          organizerId: "123",
          planId,
          amount,
          discount,
          password: "xxx",
        },
      });
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Signup</h2>
        <p>Signup your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Full Name"
                value={value.name}
                variant="outlined"
                name="name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("name", value.name, "required|alpha")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("email", value.email, "required|email")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="contactNo"
                value={value.contactNo}
                variant="outlined"
                name="contactNo"
                label="contactNo"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("contactNo", value.contactNo, "required")}
            </Grid>

            <Grid item xs={12}>
              <Select
                className="inputOutline"
                fullWidth
                id="businessType"
                placeholder="Business Type"
                value={value.password}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                name="businessType"
                label="Business Type"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => {
                  changeHandler(e);
                  console.log(e.target.value);
                }}
              >
                <MenuItem>Select Business Type</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {validator.message(
                "Business Type",
                value.businessType,
                "required"
              )}
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
