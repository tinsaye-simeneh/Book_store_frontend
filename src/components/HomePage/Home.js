import React from "react";
import { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Container,
  Pagination,
  Box,
  Modal,
} from "@mui/material";
import BookCard from "./BookCard";
import useStyles from "../styles";
import BookInfo from "./BookInfo";
import axios from "axios";

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState([]);
  async function getBooks() {
    // axios('https://bookstore-utopix.herokuapp.com/Books')
    // .then(res=>{console.log(res.data)})

    const response = await axios(
      "https://bookstore-utopix.herokuapp.com/Books"
    );
    console.log(response.data.data);
    setBooks(response.data.data);
    console.log();
  }
  useEffect(() => {
    getBooks();
  }, []);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        <strong>Explore Popular Categories</strong>
      </Typography>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {books.length === 0 ? (
            <Grid item xs={12}><Typography variant="h6" align="center" justify="center">loading books</Typography></Grid>
          ) : (
            books.map((e) => {
              return <BookCard key={e.id} page={e.page} title={e.title} author={e.author} price={e.price} genre={e.genre}/>;
            })
          )}
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
