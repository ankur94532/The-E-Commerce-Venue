import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus col-xs-12">
        <div className="col-md-6 col-xs-12">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <p className="text-justify mt-2 col-xs-12">
            This Website has been made by Prakhar Singh, Shashwat Tripathi and Kanishk Srivastava,
            3 Pre Final Year Students of IIT-(BHU). The website aims to streamline the whole process of ordering 
            food from the various canteens in our college. We provide the functionality to provide you with the order history
            for all your purchases and facilate your task of managing your expenses too.
           </p>
           <p>
            So Sign up and Start Ordering Now !!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;