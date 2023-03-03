import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AI from "../../axiosInstance";
import { REACT_APP_MAIN_APP_URL } from "../../envVars";
import PageTitle from "../pagetitle/PageTitle";

const Confirmation = () => {
  const [error, setError] = useState(false);
  const { id } = useParams();
  const verifyOrganizer = async () => {
    try {
      setError(false);
      await AI.put(
        "/master/verifyOrganizer",
        { isActive: true, isVerified: true },
        {
          headers: {
            Authorization: `Bearer ${id}`,
          },
        }
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    verifyOrganizer();
  });

  return (
    <>
      <PageTitle pageTitle={"Verification"} pagesub={"confirmation"} />
      <div>Wait a moment while we verify your registration...</div>
      {!error && (
        <div>
          Verification Done
          <Link
            className="cBtn cBtnTheme"
            to={`${REACT_APP_MAIN_APP_URL}organizerLogin`}
          >
            Login
          </Link>
        </div>
      )}
      {error && <div>Verification Failed</div>}
    </>
  );
};

export default Confirmation;
