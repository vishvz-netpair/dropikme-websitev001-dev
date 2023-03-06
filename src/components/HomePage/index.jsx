import React, { Fragment } from "react";
import PricingPage from "../PricingPage/PricingPage";
import Hero2 from "../hero2/Hero2";
import About3 from "../about3/about3";
import ServiceSection from "../ServiceSection/ServiceSection";
import ServiceSectionS3 from "../ServiceSectionS3/ServiceSectionS3";
import FunFact from "../FunFact/FunFact";
import TalkToExpert from "../TalkToExpert";
import TeamSection from "../TeamSection/TeamSection";
import ProjectSection2 from "../ProjectSection2/ProjectSection2";
import PartnerSection2 from "../PartnerSection2/PartnerSectionS2";

const HomePage = () => {
  return (
    <Fragment>
      <Hero2 />
      <About3 />
      <ServiceSection />
      <PricingPage />
      <ServiceSectionS3 />
      <FunFact />
      <TalkToExpert />
      <TeamSection tClass={"wpo-team-section-s2"} />
      <ProjectSection2 />
      <PartnerSection2 />
    </Fragment>
  );
};
export default HomePage;
