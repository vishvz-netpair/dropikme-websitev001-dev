import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import AI from "../../axiosInstance";

const Pricing = (props) => {
  const [plans, setPlans] = useState([]);
  const nav = useNavigate();
  const fetchPlans = useCallback(async () => {
    const res = await AI.get("/admin/getAllAdminPlan");
    setPlans(res.data.AdminPlan);
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  return (
    <section className="wpo-pricing-section section-padding">
      <div className="container">
        <SectionTitle subTitle={"Pricing"} Title={"Choose Your Pricing Plan"} />
        <div className="pricing-grids clearfix">
          {plans.map((x) => {
            return (
              <div className="grid" key={x._id}>
                <div
                  className="type"
                  onClick={(e) => nav(`/plan`, { state: x._id })}
                >
                  <h5>{x.plan}</h5>
                </div>
                <div
                  className="pricing-header"
                  onClick={(e) => nav(`/plan`, { state: x._id })}
                >
                  <div>
                    <h3 className="price">{x.price}</h3>
                    <p>Per Month</p>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul onClick={(e) => nav(`/plan`, { state: x._id })}>
                    <li>Strategy &amp; Research</li>
                    <li>Business &amp; Finance Analysing</li>
                    <li>SEO Optimization</li>
                    <li>Managment &amp; Marketing</li>
                    <li>24/7 Customer Support</li>
                  </ul>
                  <Link
                    to={`/signup`}
                    state={{
                      planId: x._id,
                      amount: x.price,
                      discount: x.discount,
                    }}
                    className="get-started"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
