import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import SearchIcon from "@mui/icons-material/Search";

import Login from "./Login";
import "../index.css";

const Header = () => {
  const [loggedinbtnState, setLoggedinbtnState] = useState(false);
  let userInfo = localStorage.getItem("userName");
  
  useEffect(()=>{
    if(userInfo){
      setLoggedinbtnState(true)
    }
  }, [userInfo])

  const logout = () => {
    localStorage.removeItem('accesstoken')
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userPhone')
    localStorage.removeItem('userTelegram')
    localStorage.removeItem('userFacebook')
    window.location.href = '/Home'
    setLoggedinbtnState(false)
  }

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

            <div className="row">
              {loggedinbtnState ? ( 
                <>
                <div className="navbar-nav m-auto ps-3 mt-2 col-6">    
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "./Profile";
                  }}
                  type="submit"
                  style={{
                    backgroundColor: "#103037",
                    color: "white",
                    border: "2px solid #103037",
                    borderRadius:'5px'
                  }}
                >
                {userInfo}
                </button>
                </div>
                <div className="navbar-nav m-auto ps-3 mt-1 col-6">
                <button
                onClick={ 
                  logout
                }
                type="submit"
                style={{
                  backgroundColor: "#103037",
                  color: "white",
                  border: "2px solid #103037",
                  borderRadius:'5px'
                }}
              >
              Logout
              </button>
              </div>
              </>
              ) : (
                <div className="navbar-nav m-auto ps-3 mt-2 col-12">
                  <Login setLogged={setLoggedinbtnState}/>
                  </div>
              )}
               
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
