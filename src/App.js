import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Members from "./components/Members";
import Statements from "./components/Statements";
import BusinessAdvise from "./components/BusinessAdvise";
import Investments from "./components/Investments";
import Savings from "./components/Savings";
import Loans from "./components/Loans";

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <Link to="/">BWA</Link>
        </div>
        <div className="header-link">
          <Link to="/">Home</Link>
          <Link to="/members/:id">Members</Link>
        </div>
      </header>

      <main className="main">
        <div className="content">
          <Route path="/members/:id" component={Members}></Route>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/statements/:id" component={Statements}></Route>
          <Route path="/loans/:id" component={Loans}></Route>
          <Route path="/businessadvise/:id" component={BusinessAdvise}></Route>
          <Route path="/investments/:id" component={Investments}></Route>
          <Route path="/savings/:id" component={Savings}></Route>
        </div>
      </main>
      <footer className="footer">All rights Reserved &copy; 2020 (Yaa)</footer>
    </div>
  );
}

export default App;
