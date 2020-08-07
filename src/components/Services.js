import React, { Component } from "react";
import Title from "./Title";
import {
  FaMoneyCheckAlt,
  FaRegChartBar,
  FaBusinessTime,
  FaIndustry,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: (
          <Link to="/loans/:id">
            <FaMoneyCheckAlt />{" "}
          </Link>
        ),
        title: <Link to="/loans/:id">Loans </Link>,
        info:
          "Emergency loans are available at a low rate of 10%, payable in 30 days",
      },
      {
        icon: (
          <Link to="/businessadvise/:id">
            <FaRegChartBar />{" "}
          </Link>
        ),
        title: <Link to="/businessadvise/:id"> Busines Advise </Link>,
        info:
          "Get best business advise from the experts, business plan writing offered at a low cost.",
      },
      {
        icon: (
          <Link to="/savings/:id">
            <FaBusinessTime />{" "}
          </Link>
        ),
        title: <Link to="/savings/:id"> Savings </Link>,
        info:
          "Bwa gives member the optunity to save thier money for future use.",
      },
      {
        icon: (
          <Link to="/investments/:id">
            <FaIndustry />{" "}
          </Link>
        ),
        title: <Link to="/investments/:id">"Investments" </Link>,
        info: "We offer the best investment advise",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="service-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
