import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, TextField, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "your_service_id",   // Replace with your EmailJS service ID
        "your_template_id",  // Replace with your template ID
        form.current,
        "your_public_key"    // Replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent ✅");
          setFormData({ user_name: "", user_email: "", message: "" });
          form.current?.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>

          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              backgroundColor: "#f9f9f9",
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            {/* Responsive Name + Email */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="user_name"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={formData.user_name}
                  onChange={handleChange}
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="user_email"
                  type="email"
                  label="Your Email"
                  placeholder="Your email address"
                  value={formData.user_email}
                  onChange={handleChange}
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
              </Grid>
            </Grid>

            {/* Message */}
            <TextField
              required
              fullWidth
              name="message"
              label="Message"
              placeholder="Your message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              sx={{ backgroundColor: "white", borderRadius: 1 }}
            />

            {/* Submit */}
            <Button
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
              sx={{ alignSelf: "flex-end" }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contact;
