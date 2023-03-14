import React, { Fragment } from "react";
import PageTitle from "../pagetitle/PageTitle";
import Contactpage from "./Contactpage";

const Contact = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contactpage />
    </Fragment>
  );
};
export default Contact;
