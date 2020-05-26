import React, { Component } from "react";
import SingleServices from "./SingleServices";

const services = [
  {
    title: "E-commerence",
    description: "this is the first section",
    icon: "fa-shopping-cart",
  },
  {
    title: "Responsive Design",
    description: "this is the second section",
    icon: "fa-laptop",
  },
  {
    title: "Web security",
    description: "this is the third section",
    icon: "fa-lock",
  },
];
export default class Services extends Component {
  render() {
    return (
      <div>
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row text-center">
              {services.map((service, index) => {
                return (
                  <SingleServices
                    // title={service.title}
                    // description={service.description}
                    // icon={service.icon}
                    {...service}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
