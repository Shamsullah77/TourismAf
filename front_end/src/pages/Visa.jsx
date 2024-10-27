import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import backgroundImage from "../asset/img/visa.jpeg";
import visa from "../asset/img/visa2.jpeg";

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      height: { xs: "70vh", md: "50vh" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      backgroundAttachment: "fixed",
    }}
  >
    <Container
      sx={{
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: { xs: "20px", md: "40px" },
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1rem", md: "2rem" },
          letterSpacing: "0.05em",
        }}
      >
        Visa Eligibility
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        Visa eligibility for Afghanistan can vary depending on the purpose of
        travel,
      </Typography>
    </Container>
  </Box>
);

const CheckVisaEligibility = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [visaEligibilityOpen, setVisaEligibilityOpen] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCheckAvailability = () => {
    // Open the visa eligibility dialog
    setVisaEligibilityOpen(true);
  };

  const handleCloseVisaEligibility = () => {
    setVisaEligibilityOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "6rem", marginBottom: "4rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: "#005a69" }}>
              Check Visa Eligibility
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              The Afghanistan Online Visa (E-Visa) System is now available for
              citizens of select countries. This system simplifies the visa
              application process, allowing travelers to apply online from the
              comfort of their homes. Depending on your nationality, you may be
              eligible for various types of visas, including tourist, business,
              and transit visas. To get started, simply select your country from
              the list provided on the official website. Follow the prompts to
              complete your application and submit the required documents.
              Ensure that you have all necessary information handy for a smooth
              application process.
            </Typography>
            <FormControl sx={{ width: "80%" }}>
              <InputLabel id="country-select-label">
                Select Your Country
              </InputLabel>
              <Select
                labelId="country-select-label"
                id="country-select"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                {/* Populate the options dynamically based on the eligible countries */}
                <MenuItem value="">
                  <em>Select a country</em>
                </MenuItem>
                <MenuItem value="Barbados">Barbados</MenuItem>
                <MenuItem value="Pakistan">Pakistan</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleCheckAvailability}
              sx={{
                marginTop: "16px",
                fontWeight: "bold",
                backgroundColor: "#005a69",
              }}
            >
              Check Availability
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={visa}
            alt="Visa"
            sx={{ width: "100%", height: "80%" }}
          />
        </Grid>
      </Grid>

      <Dialog
        open={visaEligibilityOpen}
        onClose={handleCloseVisaEligibility}
        aria-labelledby="visa-eligibility-dialog-title"
        aria-describedby="visa-eligibility-dialog-description"
        maxWidth="md"
        PaperProps={{
          style: {
            height: "80vh",
            width: "25vw",
          },
        }}
      >
        <DialogTitle
          id="visa-eligibility-dialog-title"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Visa Availability {selectedCountry}
        </DialogTitle>
        <DialogContent>
          {selectedCountry === "Barbados" && (
            <>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Citizens Of Barbados Are Eligible For A Tourist Visa On Arrival.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Please Submit Your Intent To Travel At Least 48-72 Hours Before
                Your Planned Trip To Pakistan To Receive An Electronic Travel
                Authorization (ETA). You Can Travel To Pakistan If You Receive A
                Valid ETA In Favor Of Your Application. An ETA Is Valid For 90
                Days From The Date Of Issuance.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Issuance Of Visa Is The Prerogative Of The Government Of
                Pakistan, Exercised Through Designated Authorities. You Can
                State Your Intent By Submitting Online Visa Application Through
                Pakistan Online Visa System.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Foreign Nationals Of Indian Origin Are Also Eligible To Apply
                Under This Category For Religious Tourism Purposes.
              </Typography>
            </>
          )}
          {selectedCountry === "Pakistan" && (
            <>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Citizens Of Pakistan Are Eligible For A Variety Of Visa Types,
                Including Tourist, Business, And Transit Visas.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                The Pakistan Online Visa (E-Visa) System Is Now Open For
                Citizens Of 192 Countries. Additionally, Citizens From 64
                Countries Are Eligible To Apply For Visa On Arrival (Electronic
                Travel Authorization - ETA) In The Tourist Category.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Applicants Must Plan Travel Only Upon Receipt Of A Valid Visa.
                You Can Apply For A Visa Online Through The Pakistan Online Visa
                System.
              </Typography>
            </>
          )}
          {(selectedCountry === "United States" ||
            selectedCountry === "United Kingdom") && (
            <>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Citizens Of The United States And The United Kingdom Are
                Eligible For Various Visa Types, Including Tourist, Business,
                And Transit Visas.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                The Application Process Can Be Initiated Through The Pakistan
                Online Visa System. Please Ensure That You Have All The
                Necessary Documentation And Information Ready Before Starting
                Your Application.
              </Typography>
            </>
          )}
          <Button
            variant="contained"
            sx={{
              fontWeight: "bold",
              backgroundColor: "#005a69",
              alignItems: "center",
            }}
          >
            Apply Now
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

const Visa = () => {
  return (
    <>
      <HeroSection />
      <CheckVisaEligibility />
    </>
  );
};

export default Visa;