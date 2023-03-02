import React, { Fragment } from "react";
import PricingPage from "../PricingPage/PricingPage";
import Hero3 from "../hero3/hero3";

const HomePage = () => {
  return (
    <Fragment>
      <Hero3 />
      <div>HomePage</div>
      <PricingPage />
    </Fragment>
  );
};
export default HomePage;
