import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
          Home
      </Link>
      <div>
        <Link
            to="/Employees"
            className={window.location.pathname === "/Employees" ? "nav-link active" : "nav-link"}
            >
              Employee Registry
            </Link>
      </div>
    </nav>
  );
}

export default Navbar;