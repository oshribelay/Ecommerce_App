import React from "react";
import Input from "@mui/material/Input";
import { OutlinedInput } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import { mailApiKey } from "../consts";

export default function Contact() {
  return (
    <>
      <div className="form-wrap">
        <form
          action="https://api.web3forms.com/submit"
          className="form"
          method="POST"
        >
          <h1>Contact Us</h1>
          <Input type="hidden" name="access_key" value={mailApiKey} />
          <div className="name-area">
            <OutlinedInput
              className="name-input"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="email-area">
            <OutlinedInput
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div className="message-area">
            <Textarea
              name="message"
              placeholder="Enter Your Message"
              sx={{ height: "100px", width: "100%", background: "transparent" }}
              required
            />
          </div>
          <Input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />

          <Button className="btn" variant="outlined" type="submit">
            Send Message!
          </Button>
        </form>
      </div>
    </>
  );
}
