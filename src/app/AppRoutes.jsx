import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import SignUpPage from "../components/SignUpPage";
import PageTitle from "../components/pagetitle/PageTitle";
import { Button } from "@material-ui/core";
import AI from "../axiosInstance";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignUpPage />} />
      <Route path="payment" element={<Payment />} />
      <Route path="confirmation" element={<Confirmation />} />
      <Route path="" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

const Confirmation = () => {};

const Payment = () => {
  const { state } = useLocation();
  const { organizerId, planId, amount, discount, password } = state;
  const status = "Success";
  const referenceNo = "123";
  const sendMail = async () => {
    try {
      const formData = {
        organizerId,
        planId,
        amount,
        discount,
        status,
        referenceNo,
        password,
      };
      await AI.post("/admin/addOrganizationPayment", formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PageTitle pageTitle={"Payment"} pagesub={"Payment"} />
      <div>Thank you!!!</div>
      <div>{planId}</div>
      <div>{amount}</div>
      <div>{discount}</div>
      <div>{password}</div>
      <div>{organizerId}</div>
      <Button fullWidth className="cBtn cBtnLarge cBtnTheme" onClick={sendMail}>
        Confirm
      </Button>
    </>
  );
};

export default AppRoutes;
