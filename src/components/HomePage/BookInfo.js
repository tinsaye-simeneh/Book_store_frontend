import React from 'react';
import {Modal} from '@mui/material';
const BookInfo = (props) => {

  return (
    <>
    <Modal open={props.open} onClose={props.close}>
        Hello world
    </Modal>
    </>
  )
}

export default BookInfo;