import React, { Component } from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import jan from "../images/jan.jpg";
import feb from "../images/feb.jpg";
import march from "../images/march.jpg";
import april from "../images/april.png";
import may from "../images/may.jpg";
import june from "../images/june.jpg";
import { Link } from "react-router-dom";

import Chart from "./Chart";
import statementData from "../data/statementData";

export default class Statements extends Component {
  render() {
    // console.log(this.props.match.params.id);
    const statement = statementData.statements.find(
      (x) => x._id == this.props.match.params.id
    );
    let images;
    if (statement._id == 1) {
      images = jan;
    } else if (statement._id == 2) {
      images = feb;
    } else if (statement._id == 3) {
      images = march;
    } else if (statement._id == 4) {
      images = april;
    } else if (statement._id == 5) {
      images = may;
    } else if (statement._id == 6) {
      images = june;
    }

    return (
      <div>
        <>
          <Hero hero="statementHero">
            <Banner
              title={statement.name + " Statement"}
              subtitle="Unlocking sustainable finances for Beja's"
            ></Banner>
          </Hero>

          <div className="back-to-results">
            <div>
              <Link to="/"> Back Home</Link>
            </div>
            <div className="details">
              <div className="details-image">
                <img src={images} alt="statement"></img>
              </div>
              <div className="details-info">
                <ul>
                  <li>
                    <h3>{statement.name}</h3>
                  </li>
                  <li>
                    <b>
                      {" "}
                      Total Cash Transacted for the month Ksh.{" "}
                      {statement.cashTransacted}
                    </b>
                  </li>
                  <li>
                    <b>
                      {" "}
                      Total Expected Interest for the Month Ksh.{" "}
                      {statement.interest}
                    </b>
                  </li>
                  <li>
                    Description:
                    <div>
                      <p>Members are encouraged to take up loans</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="lineChart">
            <Chart />
          </div>
        </>
      </div>
    );
  }
}
