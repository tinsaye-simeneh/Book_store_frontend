import React from "react";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchIcon from "@mui/icons-material/Search";
import Login from "./Login";
import Signup from "./Signup";
import "../index.css";

const Header = ({ accountState }) => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <a className="navbar-brand" href="Home">
            <img className="mt-2" src={logo} height="45" alt="Logo" />
          </a>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-3" id="navbarCollapse">
            <form className="d-flex m-auto search-div">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search..."
              />
              <button
                className="input-group-text ms-2 text-white rounded"
                style={{ backgroundColor: "#103037" }}
                id="search-addon"
              >
                <SearchIcon style={{ color: "white" }} />
                Search
              </button>
            </form>

            <div className="row  mt-1">
              <div className="col-6 mb-1">
                <Login btnName={"Login"} />
              </div>

              <div className="col-6">
                <Signup btnName={"Signup"} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};


export default Header;
