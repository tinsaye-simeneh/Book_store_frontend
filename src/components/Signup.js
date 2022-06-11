import React, {useState} from 'react';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Account from './Account'
import Login from './Login'
import '../index.css'


const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  textAlign: 'center',
  color: '#103037',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  maxHeight: 'calc(100vh)',
  overflowY: 'auto',
  overflow: 'scroll',
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

  return (
    <div>
      
      <div className='navbar-nav m-auto mt-1'>
      <button onClick={handleOpen} style={{
                     border: 'none',
                     backgroundColor: 'white'
                }}> 
                Signup
        </button>
  </div>
  
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{overflow:'scroll'}}
      >
        <Box sx={{ ...style}} className='modal-div'>

        <Account
        modalText = {'SINGUP'}
        formAction = {handleClose}
        linkText = {"Already have an account?"}
        LINK = {<Login 
          btnName = {'Login'} 
        iconState = {'d-none'} 
        btnStyle = {{
          border: 'none',
        backgroundColor: 'white'
      }}/>}
        col1 = {'col-sm-12'}
        col2 = {'d-none'}
        />

          <Button onClick={handleClose} 
          className='mt-5' 
        style={{
            backgroundColor:'#103037',
            color: 'white',
            fontSize: '1.1rem'
        }}> 
        Back to login
        </Button>

        </Box>
      </Modal>
    </div>  );
}

