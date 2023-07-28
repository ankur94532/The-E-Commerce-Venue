import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus col-xs-12">
        <div className="col-md-6 col-xs-12">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <h1 className="bg-dark p-2 text-white text-center col-xs-12">CONTACT US</h1>
          <p className="text-justify mt-2 col-xs-12">
            Feel Free to Ping us in case of any bugs and issues with this Application.
          </p>
          <p className="mt-3 col-xs-12">
            <BiMailSend /> : Prakhar : pjs21703@gmail.com
          </p>
          <p className="mt-3 col-xs-12">
            <BiPhoneCall /> : Shashwat : 9335440132
          </p>
          <p className="mt-3 col-xs-12">
            <BiPhoneCall /> : Kanishk : 7054535504
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;