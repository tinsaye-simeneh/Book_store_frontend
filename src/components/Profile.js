import React, { useState } from "react";

import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

import { BookAdding } from "./BookAdding";
import "../index.css";
import Link from "@mui/material/Link";

export function Profile() {
  const BookAddingInput = ({ Label, icon, handleprop, type }) => {
    const [values, setValues] = useState({
      Name: "",
      Author: "",
      Price: "",
      Page: "",
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    return (
      <div className="col-sm-6 text-center">
        <FormControl sx={{ m: 1 }} variant="outlined" className="input-div">
          <InputLabel htmlFor="outlined-adornment-input">{Label}</InputLabel>
          <OutlinedInput
            required
            id={"outlined-adornment-" + { Label }}
            label={Label}
            value={values.Label}
            type = {type}
            onChange={handleChange({ handleprop })}
            startAdornment={
              <InputAdornment position="start">{icon}</InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  };

  function handleCancelclick() {
    alert("yoooo it worked");
  }

  function handleSubmit() {
    alert("please change this book please please");
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center my-4"> 
          Profile
            </h3>

          <div className="row">
            <BookAddingInput 
              Label="email" 
              type="email" 
              handleprop="email" />
            
            <BookAddingInput
              Label="Phone Number"
              type="Number"
              handleprop="Phone"
              icon=<LocalPhoneIcon />
           />
          </div>

          <div className="row">
            <BookAddingInput
              Label="password"
              type="password"
              handleprop="Password"
            />
             <BookAddingInput
              Label="Telegram Username"
              type="text"
              handleprop='Telegram'
              icon=<TelegramIcon />
            />
          </div>

          <div className="row">
          <BookAddingInput
              Label="UserName"
              type = "text"
              handleprop='Username'
            />

            <BookAddingInput
              Label="Facebook Username"
              type="text"
              handleprop='Facebook'
              icon=<FacebookIcon />
            />
          </div>

            <div className="row mt-5 m-auto text-center">
              <div className="col-sm-12">
                <Button
                  variant="contained"
                  type="submit"
                  className="btn-div"
                  style={{
                    backgroundColor: "#103037",
                  }}
                >
                  Save
                </Button>
              </div>
          </div>
        </div>
      </form>
      <hr/>
      <div className="container">
        <div className="row my-4 m-auto text-center">
        <div className="col-sm-12">
            <Link
              onClick={()=>alert('yes')}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                className="btn-div"
                style={{
                  backgroundColor: "white",
                  color: "#103037",
                  border: "2px solid #103037",
                }}
              >
                Post New Book
              </Button>
            </Link>
          </div>
          </div>
          <div className="row my-4 m-auto text-center">
          <div className="col-sm-12">
            <Link
              onClick={handleCancelclick}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                className="btn-div"
                style={{
                  backgroundColor: "white",
                  color: "#103037",
                  border: "2px solid #103037",
                }}
              >
                Cancel & Back to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
