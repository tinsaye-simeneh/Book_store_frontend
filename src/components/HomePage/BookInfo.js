import React from 'react';
import {useState} from 'react';
import {Modal, Typography, Card, Grid, Button, CardHeader} from '@mui/material';
const BookInfo = (props) => {

  return (
    <>
    <Modal open={props.open} onClose={props.onClose}>
       <Card sx={{width: '900px', height: '500px', margin:'auto auto', marginTop: '100px'}}>
          <CardHeader>heavean</CardHeader>
          <Grid container space={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Book Information</Typography>
              <Button onClick={props.onClose}>close</Button>
            </Grid>
          </Grid>
       </Card>
    </Modal>
    </>
  )
}

export default BookInfo;