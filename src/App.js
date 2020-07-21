import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Members from "./components/Members";

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
        </div>
      </main>
      <footer className="footer">All rights Reserved &copy; 2020 </footer>
    </div>
  );
}

export default App;
