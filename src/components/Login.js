import React, {useState} from 'react';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'center',
  color: '#103037',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    email: '',
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
      
      <div className='navbar-nav m-auto mt-1'>
      <button onClick={handleOpen} className="accountbtn-div"> 
        <PersonOutlinedIcon
        style={{ color: '#103037'}}
        />
        Account
        </button>
  </div>
  
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style}} className='modal-div'>

        <div className='my-3'>
          <h2 id="parent-modal-title"> LOG IN </h2>
          </div>

<form onSubmit={(e) => {
              e.preventDefault();
              handleClose();
}}  >
 
 <FormControl sx={{ m: 1 }} className='email-div' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
          required
            id="outlined-adornment-email"
            type='email'
            value={values.email}
            onChange={handleChange('email')}
            label="email"
          />
         </FormControl>
         
        <FormControl sx={{ m: 1 }} className='password-div' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          required
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
         
          <div className='my-4'>
         <Button variant="contained"
         type='submit' 
         className='btn-div'
         style={{
            backgroundColor:'#103037', 
            }} >Log in</Button>
         </div>
        </form>
          
         
         <div className='m-auto link-div'>
                <div className="container-fluid">
  <div className="row">
    <div className="col-sm-6">
    <span className='text-span'>Don't have an account? </span>
                
                <a href='signup' 
                style={{
                     textDecoration:'none',
                }}
                >Signup</a>
    </div>
    <div class="col-sm-6">
    <a href='signup'
                style={{ 
                    textDecoration:'none',
            }}
            > Forgot password?</a>
    </div>
  </div>
  </div>
  </div>
          <div className='m-auto mt-5 bottom-div'>
            <p> 
            By Logging or Registering you agree to the 
            <a href='Policies' style={{
                     textDecoration:'none'
                }}>&nbsp; Terms of use</a>
            </p>
            
         <div 
         className='m-auto'
         style={{
            display: 'block',
            backgroundColor:'#ccc', 
            color:'#103037', 
            width:'75%'
            }} >
            Need help? 
            <a href='contact' 
            style={{
                textDecoration:'none'
           }}>Contact Us</a>
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

