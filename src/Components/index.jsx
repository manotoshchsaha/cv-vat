import React from "react";
import Footer from "./Footer";
import ProfilePic from "./Profile/ProfilePic";
import ProfileInfo from "./Profile/ProfileInfo";

import "./BioData.master.css";
import Skill from "./Skills/Skill";
import Language from "./Languages/Language";
import WorkExp from "./WorkExp/WorkExp";
import EduExp from "./Education/EduExp";

export default function Index() {
  return (
    <>
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        {/* <!-- The Grid --> */}
        <div className="w3-row-padding">
          {/* <!-- Left Column --> */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <ProfilePic />
              <div className="w3-container">
                <ProfileInfo />
                <hr />
                <Skill />
                <br />
                <Language />
                <br />
              </div>
            </div>
            <br />
            {/* <!-- End Left Column --> */}
          </div>
          {/* <!-- Right Column --> */}
          <div className="w3-twothird">
            <WorkExp />
            <EduExp />
            {/* <!-- End Right Column --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
