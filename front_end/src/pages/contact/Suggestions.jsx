import React from "react";
import contactImage from "../asset/img/contactimage.webp";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const SuggestionComplaintsPage = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: "cover",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" align="center" color="black">
          Suggestions and Complaints
        </Typography>
      </div>

      {/* Suggestions and Complaints Section */}
      <Grid
        container
        justifyContent="center"
        spacing={2}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Grid item xs={12} md={8}>
          <Typography variant="h5" align="center">
            Send us your suggestions or complaints
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper variant="outlined" style={{ padding: "20px" }}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              margin="normal"
              helperText="Please enter your full name"
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              helperText="We'll never share your email."
              type="email"
            />
            <TextField
              label="Subject"
              fullWidth
              variant="outlined"
              margin="normal"
              helperText="What is this about?"
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              margin="normal"
              helperText="Share your thoughts with us."
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuggestionComplaintsPage;