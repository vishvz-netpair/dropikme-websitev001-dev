import React, { Fragment } from "react";
import PageTitle from "../pagetitle/PageTitle";
import MissionVission from "../MissionVission/MissionVission";
import About4 from "../about4/about4";
import Skill2 from "../Skill2/Skill2";
import TeamSection from "../TeamSection/TeamSection";
import Testimonial from "../Testimonial/Testimonial";
import FunFact from "../FunFact/FunFact";

const AboutPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <MissionVission />
      <About4 />
      <Skill2 />
      <TeamSection tClass={"wpo-team-section-s3"} />
      <Testimonial />
      <FunFact fClass={"wpo-fun-fact-section-s2 pt-0"} />
    </Fragment>
  );
};
export default AboutPage;
