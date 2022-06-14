import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import useStyles from "../styles";

const BookCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6} md={3} direction="row-reverse">
        <Card className={classes.card} style={{ border: "3px solid #103037", borderRadius: '15px' }}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom align="center" variant="h5">
              Oromai
            </Typography>
            <Typography
              align="center"
              style={{ borderTop: "3px solid #103037" }}
            >
              Author - Bealu Girma
            </Typography>
            <Typography align="center">Price - 300 ETB</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" style={{   backgroundColor: "#103037", "&:hover": {   backgroundColor: "white", }, color: "white", "&:hover": {   color: "#103037", }, borderWidth: "2px", borderColor: "#103037", }} fullWidth>
              more
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default BookCard;
