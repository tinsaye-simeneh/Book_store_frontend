import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "@mui/material/Link";

import "../index.css";

export default function Profile() {
  let token = localStorage.getItem("accesstoken");
  let Username = localStorage.getItem("userName");
  let Email = localStorage.getItem("userEmail");
  let Phone = localStorage.getItem("userPhone");
  let Facebook = localStorage.getItem("userFacebook");
  let Telegram = localStorage.getItem("userTelegram");

  const [values, setValues] = useState({
    email: Email,
    username: Username,
    phone: Phone,
    facebook: Telegram,
    telegram: Facebook,
    password: "",
  });

  const updateUsers = async (e) =>{
    e.preventDefault();
    try {
      let res = await axios.put(
        "https://bookstore-utopix.herokuapp.com/auth/profile",
        {
          username: values.username,
          email: values.email,
          phone: values.phone,
          facebook: values.facebook,
          telegram: values.telegram,
          headers : {
            accessToken: {token}
          }   
        }
      );

      console.log(res.data);

      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userPhone");
      localStorage.removeItem("userTelegram");
      localStorage.removeItem("userFacebook");

      localStorage.setItem("userName", values.username);
      localStorage.setItem("userEmail", values.email);
      localStorage.setItem("userPhone", values.phone);
      localStorage.setItem("userTelegram", values.telegram);
      localStorage.setItem("userFacebook", values.facebook);
      window.location.href = '/Home'
    } catch (err) {
      alert(err);
    }
  };
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
      <h3 className="text-center my-4">Profile</h3>
      <form onSubmit={updateUsers}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-center">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="input-div"
              >
                <InputLabel htmlFor="outlined-adornment-input">
                  Email
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  label="email"
                />
              </FormControl>
            </div>

            <div className="col-sm-6 text-center">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="input-div"
              >
                <InputLabel htmlFor="outlined-adornment-input">
                  Username
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-username"
                  type="username"
                  value={values.username}
                  onChange={handleChange("username")}
                  label="username"
                />
              </FormControl>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 text-center">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="input-div"
              >
                <InputLabel htmlFor="outlined-adornment-input">
                  Phone
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-phone"
                  type="phone"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  label="phone"
                />
              </FormControl>
            </div>

            <div className="col-sm-6 text-center">
            <FormControl sx={{ m: 1 }} className="input-div" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              disabled = 'disabled'
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
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 text-center">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="input-div"
              >
                <InputLabel htmlFor="outlined-adornment-input">
                  Telegram
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-telegram"
                  type="telegram"
                  value={values.telegram}
                  onChange={handleChange("telegram")}
                  label="telegram"
                />
              </FormControl>
            </div>

            <div className="col-sm-6 text-center">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="input-div"
              >
                <InputLabel htmlFor="outlined-adornment-input">
                  Facebook
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-facebook"
                  type="facebook"
                  value={values.facebook}
                  onChange={handleChange("facebook")}
                  label="facebook"
                />
              </FormControl>
            </div>
          </div>

          <div className="row my-4 m-auto text-center">
          <div className="col-sm-12">
              <Button
                className="btn-div"
                style={{
                  backgroundColor: "#103037",
                  color: "white",
                  border: "2px solid #103037",
                }}
                type="submit"
              >
                Update
              </Button>
          </div>
        </div>

        </div>
      </form>

      <hr />
      <div className="container">
       <div className="row m-auto text-center">
          <div className="col-sm-12">
          <a href='/bookadding'
          style={{textDecoration:'none'}}>
              <Button
                className="btn-div"
                type='submit'
                style={{
                  backgroundColor: "#103037",
                  color: "white",
                  border: "2px solid #103037",
                }}
              >
                
                Post New Book
              </Button>
              </a>
          </div>
        </div>

        <div className="row mt-3 mb-3 m-auto text-center">
          <div className="col-sm-12">
          <a href='/Home'
          style={{textDecoration:'none'}}>
              <Button
                className="btn-div"
                style={{
                  backgroundColor: "#103037",
                  color: "white",
                  border: "2px solid #103037",
                }}
              >
                Back to Home page
              </Button>
              </a>
          </div>
        </div>
                <div className='mb-5'> &nbsp;</div>
      </div>
    </div>
  );
}
