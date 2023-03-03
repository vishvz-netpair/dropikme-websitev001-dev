import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import SignUpPage from "../components/SignUpPage";
import PageTitle from "../components/pagetitle/PageTitle";
import Confirmation from "../components/Confirmation";
import Payment from "../components/Payment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignUpPage />} />
      <Route path="payment" element={<Payment />} />
      <Route path="confirmation/:id" element={<Confirmation />} />
      <Route
        path="thanks"
        element={
          <>
            <PageTitle
              pageTitle={"Thanks for choosing Us!"}
              pagesub={"thanks"}
            />
            <h1>
              Please check your mail for the activation link and credentials
            </h1>
          </>
        }
      />
      <Route path="" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
