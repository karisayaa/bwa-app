import React, { Component } from "react";
import { Link } from "react-router-dom";
import d2 from "../images/d2.png";

import Hero from "./Hero";
import Banner from "./Banner";
import { CardContent, Typography, colors } from "@material-ui/core";
import CountUp from "react-countup";
import Services from "./Services";
import Reports from "./Reports";
import AboutUs from "./AboutUs";
import statementData from "../data/statementData";

export default class Home extends Component {
  render() {
    return (
      <div>
        <>
          <Hero hero="defaultHero">
            <Banner
              title="BWA FOREVER"
              subtitle="Unlocking sustainable finances for Beja's"
            >
              <CardContent>
                <Typography variant="h5">
                  <div className="numbers">
                    Cash Transacted Since Inception Ksh:{" "}
                    <CountUp
                      className="counter"
                      start={0}
                      end={298100}
                      duration={3}
                      separator=","
                    />
                  </div>
                </Typography>
              </CardContent>
            </Banner>
          </Hero>
          <Services />

          <div className="clear"></div>
          <Reports />
          <div></div>

          <div>
            <ul className="products">
              {statementData.statements.map((statement) => (
                <li key={statement._id}>
                  <div className="product">
                    <Link to={"/statements/" + statement._id}>
                      <img className="product-image" src={d2} alt="statement" />
                    </Link>
                    <div className="product-name">
                      <Link to={"/statements/" + statement._id}>
                        <h4>{statement.name}</h4>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <AboutUs />
        </>
      </div>
    );
  }
}
