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
} from "@mui/material";
const BookInfo = (props) => {
  const classes = useStyles();
  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        <Card
          sx={{

            width: {sm:'100%',md:"900px"},
            height: "500px",
            margin: "auto auto",
            marginTop: "100px",
            borderRadius: "15px",
          }}
          className={classes.bookInfo}
        >
          <Typography variant="h3" align="center" gutterBottom sx={{ marginTop: "15px" }}>
            Book Information
          </Typography>
          <Grid
            container
            space={2}
            alignItems="center"
            justify="center"
            sx={{ padding: "15px" }}
          >
            <Grid item xs={12} direction="column" md={12} lg={6}>
              <Typography variant="h4" gutterBottom>
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
              <Typography variant="subtitle1">
                <span style={{ borderBottom: "solid 1px" }}>Details</span>
              </Typography>
            </Grid>
            <Grid item xs={12} direction="column" md={12} lg={6}></Grid>
          </Grid>
          <Button onClick={props.onClose}>close</Button>
        </Card>
      </Modal>
    </>
  );
};

export default BookInfo;
