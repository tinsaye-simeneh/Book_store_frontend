import React, { useState } from "react";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Input({
  modalText,
  formAction,
  linkText,
  LINK,
  col1,
  col2,
  signupInputs,
}) {
  const [values, setValues] = useState({
    password: "",
    email: "",
    username: "",
    phone: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="my-3">
        <h2 id="parent-modal-title"> {modalText} </h2>
      </div>

      <form onSubmit={formAction}>
        <div className={signupInputs}>
          <FormControl sx={{ m: 1 }} className="email-div" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username">
              Username
            </InputLabel>
            <OutlinedInput
              className={signupInputs}
              required
              id="outlined-adornment-username"
              type="text"
              value={values.username}
              onChange={handleChange("username")}
              label="Username"
            />
          </FormControl>
        </div>

        <FormControl sx={{ m: 1 }} className="email-div" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            label="email"
          />
        </FormControl>

        <FormControl sx={{ m: 1 }} className="password-div" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <p className={signupInputs}></p>

        <div className={signupInputs}>
          <FormControl
            variant="outlined"
            sx={{ m: 1 }}
            className="password-div"
          >
            <InputLabel htmlFor="input-with-icon-adornment">Phone</InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-phone"
              type="tel"
              value={values.phone}
              onChange={handleChange("phone")}
              label="phone"
              startAdornment={
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div className={signupInputs}>
          <FormControl
            variant="outlined"
            sx={{ m: 1 }}
            className="password-div"
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Facebook
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-facebook"
              type="text"
              value={values.facebook}
              onChange={handleChange("facebook")}
              label="facebook"
              startAdornment={
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div className={signupInputs}>
          <FormControl
            variant="outlined"
            sx={{ m: 1 }}
            className="password-div"
          >
            <InputLabel
              htmlFor="input-with-icon-adornment"
              className={signupInputs}
            >
              Telegram
            </InputLabel>
            <OutlinedInput
              className={signupInputs}
              required
              id="outlined-adornment-telegram"
              type="text"
              value={values.telegram}
              onChange={handleChange("telegram")}
              label="telegram"
              startAdornment={
                <InputAdornment position="start">
                  <TelegramIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div className="my-4">
          <Button
            variant="contained"
            type="submit"
            className="btn-div"
            style={{
              backgroundColor: "#103037",
            }}
          >
            {modalText}
          </Button>
        </div>
      </form>

      <div className="m-auto link-div">
        <div className="container-fluid">
          <div className="row">
            <div className={col1}>
              <span className="text-span">{linkText} </span>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white"
                }}
              >
                {LINK}
              </button>
            </div>
            <div class={col2}>
              <a
                href="signup"
                style={{
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-5 bottom-div">
        <p>
          By Logging or Registering you agree to the
          <a
            href="Policies"
            style={{
              textDecoration: "none",
            }}
          >
            &nbsp; Terms of use
          </a>
        </p>

        <div
          className="m-auto"
          style={{
            display: "block",
            backgroundColor: "#ccc",
            color: "#103037",
            width: "75%",
          }}
        >
          Need help?
          <a
            href="contact"
            style={{
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
