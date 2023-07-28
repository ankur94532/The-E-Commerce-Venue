import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus col-xs-12">
        <div className="col-md-6 col-xs-12">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <p>We do not share data with any third party promotional application.</p>
          <p>We facilate the process of ordering food, however we do not take the 
            responsibility for any difference from the items shown.
          </p>
          <p>For severe quality shortcomings, Contact us in the ways provided.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;