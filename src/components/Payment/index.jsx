import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import AI from "../../axiosInstance";
import PageTitle from "../pagetitle/PageTitle";

const Payment = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const { organizerId, planId, amount, discount, password } = state;
  const status = "Success";
  const referenceNo = "123";
  const sendMail = async () => {
    try {
      const formData = {
        organizationId: organizerId,
        planId,
        amount,
        discount,
        status,
        referenceNo,
        password,
      };
      await AI.post("/admin/addOrganizationPayment", formData);
      nav("/thanks");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PageTitle pageTitle={"Payment"} pagesub={"Payment"} />
      <div>Please complete your payment!</div>

      <Button fullWidth className="cBtn cBtnLarge cBtnTheme" onClick={sendMail}>
        Payment
      </Button>
    </>
  );
};

export default Payment;
