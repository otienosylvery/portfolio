import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  TextField,
  Grid,
  Snackbar,
  Alert,
  Slide,
  SlideProps,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />; // Slide in from the right
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    type: "success" | "error";
  }>({ open: false, message: "", type: "success" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm("contact_service", "contact_form", form.current, "SFZiKygRAWzbVx1Mw")
      .then(() => {
        setAlert({
          open: true,
          message: "Message sent successfully ✅",
          type: "success", // green alert
        });
        setFormData({ name: "", email: "", message: "" });
        form.current?.reset();
      })
      .catch(() => {
        setAlert({
          open: true,
          message: "Something went wrong ❌ Please try again",
          type: "error", // red alert
        });
      })
      .finally(() => setLoading(false));
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
                  name="name"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  type="email"
                  label="Your Email"
                  placeholder="Your email address"
                  value={formData.email}
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
              endIcon={!loading && <SendIcon />}
              disabled={loading}
              sx={{ 
                alignSelf: "flex-end",
                backgroundColor:"#1976d2",
                transition: "all 0.3s ease",
                "&:hover":{
                  backgroundColor: "#115293", // darker shade
      transform: "scale(1.05)",   // slight zoom
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)", // subtle shadow
                },
                "&:disabled": {
      backgroundColor: "#9e9e9e", // greyed out when disabled
      transform: "none",
      boxShadow: "none",
    },
               }}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </Box>
        </div>
      </div>

      {/* Snackbar with slide animation */}
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.type} // 👈 success = green, error = red
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
