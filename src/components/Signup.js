import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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

import Login from  './Login'
import axios from 'axios'
import "../index.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'center',
  maxHeight: '100vh',
  overflow:'scroll',
  color: '#103037',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Signup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    facebook: "",
    telegram: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values)
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const regUsers = async (e) => {
    e.preventDefault()
    try {
     let res = await axios.post('https://bookstore-utopix.herokuapp.com/auth/register', {
        username: values.username,
        password: values.password,
        email: values.email,
        phone: values.phone,
        facebook: values.facebook,
        telegram: values.telegram
      });
    console.log(res.data);
    handleClose();
    alert("you've successfully created your account, Goto Login page to Login");
    <Login/>
  } 
  catch (err) {
      console.error(err);
      handleOpen();
      alert(err);
  } 
};


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div>
      
      <div className='navbar-nav m-auto mt-1'>
      <button onClick={handleOpen} style={{
                     backgroundColor: 'white',
                     color:'#103037',
                     border: '2px solid #103037'
                }}
                > 
        Signup
        </button>
  </div>
  
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style}} className='modal-div'>

        <div className="my-5">
        <h2 id="parent-modal-title"> Signup </h2>
      </div>

      <form onSubmit={regUsers}>
        <div>
          <FormControl sx={{ m: 1 }} className="input-div" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username">
              Username
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-username"
              type="text"
              value={values.username}
              onChange={handleChange("username")}
              label="Username"
            />
          </FormControl>
        </div>

        <FormControl sx={{ m: 1 }} className="input-div" variant="outlined">
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

        <FormControl sx={{ m: 1 }} className="input-div" variant="outlined">
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

        <p ></p>

        <div>
          <FormControl
            variant="outlined"
            sx={{ m: 1 }}
            className="input-div"
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

        <div>
          <FormControl
            variant="outlined"
            sx={{ m: 1 }}
            className="input-div"
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

        <div>
          <FormControl
            variant="outlined"
            sx={{ m: 1 }}
            className="input-div"
          >
            <InputLabel
              htmlFor="input-with-icon-adornment"
            >
              Telegram
            </InputLabel>
            <OutlinedInput
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
          Signup
          </Button>
        </div>
      </form>

        <div className="m-auto link-div">
        <div className="container-fluid">
          <div className="row">
            <div className='col-sm-8'>
              <span className="text-span"> Already have an account? </span>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white"
                }}
              >
                <Login/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto mt-5 bottom-div">
        <p>
          By Logging or Registering you agree to the
          <a
            href="about"
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
            href="about"
            style={{
              textDecoration: "none",
            }}
          >
            &nbsp; Contact Us
          </a>
        </div>
      </div>

          <Button onClick={handleClose} 
          className='mt-5' 
        style={{
            backgroundColor:'#103037',
            color: 'white',
            fontSize: '1.1rem'
        }}> 
        Close
        </Button>

        </Box>
      </Modal>
    </div>
  );
}

