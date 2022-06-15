import React, { useState } from "react";
import Abt from "./AboutTxt";
import { TextField, Button } from "@mui/material";

export default function OtherPage() {
  const AboutText = Abt;
  const [content, setContent] = useState(About);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  function handleSubmit() {
    alert('Horray.. It worked');
  }

  function About() {
    return (
      <>
        <h3 className="mb-4">About Us</h3>
        <div className="container">{AboutText}</div>
      </>
    );
  }

  function Contact() {
    return (
      <>
        <h3 className="mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm12">
              <TextField
                label="Name"
                type="text"
                onChange={(e) => setName({ name: e.target.value })}
                className="input-div"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm12">
              <TextField
                label="Email"
                type="email"
                onChange={(e) => setEmail({ email: e.target.value })}
                className="input-div"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm12">
              <TextField
                onChange={(e) => setMessage({ message: e.target.value })}
                className="input-div"
                id="contactMessage"
                label="Message"
                multiline
                rows={4}
              />
            </div>
          </div>
          <Button
            type="button"
            className="mt-3 btn-div"
            style={{ backgroundColor: "#103037", color: "white" }}
          >
Send
          </Button>
        </form>
      </>
    );
  }

  function Policies() {
    return (
      <>
        <h3 className="mb-4">Terms and Agreements</h3>
        <div className="container">{AboutText}</div>
      </>
    );
  }

  const btnStyle1 = {
    backgroundColor: "#103037",
    color: "white",
  };

  return (
    <>
      <div className="container mt-5 text-center" >
        <button
          className="btn"
          onClick={() => setContent(About)}
          style={btnStyle1}
        >
          About
        </button>

        <button
          className="btn ms-5"
          onClick={() => setContent(Contact)}
          style={btnStyle1}
        >
          Contact Us
        </button>

        <button
          className="btn ms-5"
          onClick={() => setContent(Policies)}
          style={btnStyle1}
        >
          Policies
        </button>
      </div>

      <div className="container mt-5 text-center">{content}</div>
    </>
  );
}
