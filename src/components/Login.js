import React, {useState} from 'react';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Input from './Inputs'
import Signup from './Signup'


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

export default function Login({iconState, btnName, btnStyle}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      
      <div className='navbar-nav m-auto mt-1'>
      <button onClick={handleOpen} className="accountbtn-div"> 
        <PersonOutlinedIcon className={iconState}
        style={{ color: '#103037'}}
        />
        {btnName}
        </button>
  </div>
  
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{overflow:'scroll'}}
      >
        <Box sx={{ ...style}} className='modal-div'>

        <Input
        modalText = {'LOG IN'}
        formAction = {handleClose}
        linkText = {"Don't have an account?"}
        LINK = {<Signup/>}
        col1 = {'col-sm-6'}
        col2 = {'col-sm-6'}
        signupInputs = {'d-none'}
        />

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

