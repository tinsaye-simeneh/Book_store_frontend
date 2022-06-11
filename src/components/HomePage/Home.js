import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import BookCard from "./BookCard";
import useStyles from "../styles";
const Home = () => {
  const classes=useStyles();
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

      </Container>
    </>
  );
};

export default Home;
