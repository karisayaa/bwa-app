import React from "react";
import { Link } from "react-router-dom";
import d2 from "../images/d2.png";

export default function Home(props) {
  return (
    <ul className="products">
      <li>
        <div className="product">
          <Link to="/members/:id">
            <img className="product-image" src={d2} alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/members/:id">
              <h4>January</h4>
            </Link>
          </div>
          <div className="product-brand">Total Cash Collected</div>
          <div className="product-price">Ksh. 39,000</div>
        </div>
      </li>
      <li>
        <div className="product">
          <Link to="/members/:id">
            <img className="product-image" src={d2} alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/members/:id">
              <h4>January</h4>
            </Link>
          </div>
          <div className="product-brand">Total Cash Collected</div>
          <div className="product-price">Ksh. 39,000</div>
        </div>
      </li>
      <li>
        <div className="product">
          <Link to="/members/:id">
            <img className="product-image" src={d2} alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/members/:id">
              <h4>January</h4>
            </Link>
          </div>
          <div className="product-brand">Total Cash Collected</div>
          <div className="product-price">Ksh. 39,000</div>
        </div>
      </li>
      <li>
        <div className="product">
          <Link to="/members/:id">
            <img className="product-image" src={d2} alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/members/:id">
              <h4>January</h4>
            </Link>
          </div>
          <div className="product-brand">Total Cash Collected</div>
          <div className="product-price">Ksh. 39,000</div>
        </div>
      </li>
      <li>
        <div className="product">
          <Link to="/members/:id">
            <img className="product-image" src={d2} alt="product" />
          </Link>
          <div className="product-name">
            <Link to="/members/:id">
              <h4>January</h4>
            </Link>
          </div>
          <div className="product-brand">Total Cash Collected</div>
          <div className="product-price">Ksh. 39,000</div>
        </div>
      </li>
    </ul>
  );
}
