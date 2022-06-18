import React, { useState } from "react";

import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import "../index.css";
import Link from "@mui/material/Link";

export default function BookAdding() {
  const BookAddingInput = ({ Label, type, disabled, icon, handleprop }) => {
    const [values, setValues] = useState({
      Name: "",
      Author: "",
      Price: "",
      Page: "",
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    return (
      <div className="col-sm-6 text-center">
        <FormControl sx={{ m: 1 }} variant="outlined" className="input-div">
          <InputLabel htmlFor="outlined-adornment-input">{Label}</InputLabel>
          <OutlinedInput
            required
            id={"outlined-adornment-" + { Label }}
            type={type}
            label={Label}
            value={values.Label}
            disabled={disabled}
            onChange={handleChange({ handleprop })}
            startAdornment={
              <InputAdornment position="start">{icon}</InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  };

  const [dropvalue] = useState([
    "Psychological",
    "Fiction",
    "Biography",
    "Romance",
    "Poetry",
    "History",
    "Acadamical",
    "Science Fiction",
  ]);
  const [selected, setSelected] = useState("Psychological");

  function handledropChange(event) {
    setSelected(event.target.value);
  }

  function handleCancelclick() {
    alert("yoooo it worked");
  }

  function handleSubmit() {
    alert("please change this book please please");
  }

  const [datevalue, setDatevalue] = useState(new Date("2014-08-18T21:11:54"));

  const handleDatechange = (newValue) => {
    setDatevalue(newValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center my-4"> Book Information </h3>

          <div className="row">
            <BookAddingInput Label="Book Name" type="text" handleprop="Name" />
            <BookAddingInput
              Label="Poster Name"
              type="text"
              disabled="disabled"
            />
          </div>

          <div className="row">
            <BookAddingInput
              Label="Author Name"
              type="text"
              handleprop="Author"
            />
            <BookAddingInput
              Label="Phone Number"
              type="text"
              disabled="disabled"
              icon=<LocalPhoneIcon />
            />
          </div>
          <div className="row">
            <div className="col-sm-6 text-center">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="input-div"
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      required
                      label="Published Date"
                      inputFormat="MM/dd/yyyy"
                      value={datevalue}
                      onChange={handleDatechange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </FormControl>
            </div>

            <BookAddingInput
              Label="Facebook Username"
              type="text"
              disabled="disabled"
              icon=<FacebookIcon />
            />
          </div>

          <div className="row">
            <BookAddingInput Label="Price" type="number" />

            <BookAddingInput
              Label="Telegram Username"
              type="text"
              disabled="disabled"
              icon=<TelegramIcon />
            />
          </div>

          <div className="row">
            <BookAddingInput Label="Page" type="number" />
          </div>

          <div className="row">
            <div className="col-sm-6 text-center">
              <FormControl
                sx={{ m: 1 }}
                variant="outlined"
                className="input-div"
              >
                <InputLabel htmlFor="Select Book Type">Book Type</InputLabel>
                <Select
                  value={selected}
                  onChange={handledropChange}
                  inputProps={{
                    name: "book_type",
                    id: "book_type",
                  }}
                >
                  {dropvalue.map((value) => {
                    return <MenuItem value={value}>{value}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>

            <div className="row mt-5 m-auto text-center">
              <div className="col-sm-12">
                <Button
                  variant="contained"
                  type="submit"
                  className="btn-div"
                  style={{
                    backgroundColor: "#103037",
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="container">
        <div className="row my-4 m-auto text-center">
          <div className="col-sm-12">
            <Link
              onClick={handleCancelclick}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                className="btn-div"
                style={{
                  backgroundColor: "white",
                  color: "#103037",
                  border: "2px solid #103037",
                }}
              >
                Back to Profile Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
