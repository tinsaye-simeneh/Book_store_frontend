import React from "react";
import { useState } from "react";
import useStyles from "../styles";
import {
  Modal,
  Typography,
  Card,
  Grid,
  Button,
  CardHeader,
  Box,
  CardContent,
  CardActions,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

const BookInfo = (props) => {
  const classes = useStyles();
  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        <Card
          sx={{
            width: { sm: "100%", md: "900px" },
            height: "450px",
            overflow: 'auto',
            margin: "auto auto",
            marginTop: "100px",
            borderRadius: "15px",
          }}
          className={classes.bookInfo}
        >
          <CardContent>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ marginTop: "15px" }}
            >
              Book Information
            </Typography>
            <Grid container space={2} direction="row" sx={{ padding: "15px" }}>
              <Grid item xs={12} md={12} lg={6}>
                <Typography variant="h4" align="center" gutterBottom>
                  <span
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#103037",
                      color: "white",
                    }}
                  >
                    Book Name - Oromai
                  </span>
                </Typography>
                <Typography align="center">
                  <Typography variant="subtitle1">
                    <span style={{ borderBottom: "solid 1px" }}>
                      <strong>Details</strong>
                    </span>
                  </Typography>
                  <Typography variant="body2">Author - Bealu Girma</Typography>
                  <Typography variant="body2">
                    Published on - May 29, 1990
                  </Typography>
                  <Typography variant="body2">Pages - 332</Typography>
                  <Typography variant="body2">Type - Fiction</Typography>
                  <Typography variant="body2" gutterBottom>Price - 300ETB</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Typography variant="h4" gutterBottom align="center">
                  <span
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#103037",
                      color: "white",
                    }}
                  >
                    Seller Information
                  </span>
                </Typography>
                <Card sx={{ border: "solid grey 1px" }}>
                  <Typography align="center">
                    <strong>Posted By: Eyosias Tamirat</strong>
                  </Typography>
                  <Typography align="center" gutterBottom>
                    <strong>Date of post: August 31, 2002</strong>
                  </Typography>
                  <Typography align="center">
                    <Button sx={{ color: "#103037", marginRight: "15px" }}>
                      <LocalPhoneIcon />
                      <strong>show phone number</strong>
                    </Button>
                  </Typography>
                  <Typography align="center">
                    <Button sx={{ color: "#103037", marginRight: "15px" }}>
                      <FacebookIcon />
                      <strong>Facebook</strong>
                    </Button>
                  </Typography>
                  <Typography align="center">
                    <Button sx={{ color: "#103037", marginRight: "15px" }}>
                      <TelegramIcon />
                      <strong>Telegram</strong>
                    </Button>
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </CardContent>

          <Typography align="center" gutterBottom>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#103037",
                  color: "white"
                },
                color: "#103037",
                marginRight: "15px",
              }}
              onClick={props.onClose}
            >
              <strong>close</strong>
            </Button>
          </Typography>
        </Card>
      </Modal>
    </>
  );
};

export default BookInfo;
