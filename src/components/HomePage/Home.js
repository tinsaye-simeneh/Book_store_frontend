import React from "react";
import {useState} from 'react';
import { Typography, Grid, Container, Pagination, Box, Modal } from "@mui/material";
import BookCard from "./BookCard";
import useStyles from "../styles";
import BookInfo from "./BookInfo";

const Home = () => {
  const classes=useStyles();
  const [open, setOpen] = useState(false);
  const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        <strong>Explore Popular Categories</strong>
      </Typography>
    
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {numbers.map((e)=>{
          return(
            <BookCard key={e}/>
          )
        })}
      
      </Grid>
      <Box
        justifyContent="center"
        alignItems="center"
        display={"flex"}
        sx={{ margin: "50px 0px", color: "white" }}
      >
        <Pagination
          count={10}
          size="medium"
          className={classes.pagination}
          sx={{ size: { xs: "small" } }}
        />
      </Box>
      </Container>
    </>
  );
};

export default Home;
