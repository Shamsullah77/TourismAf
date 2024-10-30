import React from "react";
import { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import mission from "../../asset/img/mission.webp";
import vission from "../../asset/img/vission.webp";
import value from "../../asset/img/values1.webp";

const BusinessValues = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Box sx={{ py: 8, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "80%", width: "100%" }}>
        <Grid container spacing={8}>
          {/* Mission (image on the left, text on the right) */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "300px", // Image width
                  height: "auto", // Adjust height to auto
                  borderRadius: "10%",
                  overflow: "hidden",
                  boxShadow: "0 0 0 5px transparent",
                  mr: 2,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "10%",
                    background: "linear-gradient(45deg, #ff9800, #e65100)",
                    zIndex: 1,
                  }}
                />
                <img
                  src={mission}
                  alt="Mission"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10%",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </Box>
              <Box sx={{ width: "50%" }}>
                {/* Takes 50% of the space */}
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    color: "#004d5b",
                    textDecoration: "underline", // Added underline
                  }}
                >
                  Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.6, mt: 1, textAlign: "justify" }}
                >
                  Our mission is to provide high-quality products and services
                  to our customers. Our mission is to provide high-quality
                  products and services to our customers. Our mission is to
                  provide high-quality products and services to our customers.
                  Our mission is to provide high-quality products and services
                  to our customers. Our vision is to be the leading provider in
                  our industry. Our vision is to be the leading provider in our
                  industry. Our mission is to provide high-quality products and
                  services to our customers. Our mission is to provide
                  high-quality products and services to our customers.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Vision (unchanged) */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 4,
              }}
            >
              <Box sx={{ width: "50%", mr: 2 }}>
                {/* Takes 50% of the space */}
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    color: "#004d5b",
                    textDecoration: "underline", // Added underline
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.6, mt: 1, textAlign: "justify" }}
                >
                  Our vision is to be the leading provider in our industry. Our
                  vision is to be the leading provider in our industry. Our
                  mission is to provide high-quality products and services to
                  our customers. Our mission is to provide high-quality products
                  and services to our customers. Our vision is to be the leading
                  provider in our industry. Our vision is to be the leading
                  provider in our industry. Our mission is to provide
                  high-quality products and services to our customers. Our
                  mission is to provide high-quality products and services to
                  our customers.
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: "300px", // Image width
                  height: "auto", // Adjust height to auto
                  borderRadius: "10%",
                  overflow: "hidden",
                  boxShadow: "0 0 0 5px transparent",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "10%",
                    background: "linear-gradient(45deg, #1565c0, #0d47a1)",
                    zIndex: 1,
                  }}
                />
                <img
                  src={vission}
                  alt="Vision"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10%",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Values (image on the left, text on the right) */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "300px", // Image width
                  height: "auto", // Adjust height to auto
                  borderRadius: "10%",
                  overflow: "hidden",
                  boxShadow: "0 0 0 5px transparent",
                  mr: 2,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "10%",
                    background: "linear-gradient(45deg, #d32f2f, #b71c1c)",
                    zIndex: 1,
                  }}
                />
                <img
                  src={value}
                  alt="Values"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10%",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </Box>
              <Box sx={{ width: "50%" }}>
                {/* Takes 50% of the space */}
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    color: "#004d5b",
                    textDecoration: "underline", // Added underline
                  }}
                >
                  Values
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.6, mt: 1, textAlign: "justify" }}
                >
                  Our core values are integrity, excellence, and customer
                  satisfaction. Our core values are integrity, excellence, and
                  customer satisfaction. Our mission is to provide high-quality
                  products and services to our customers. Our mission is to
                  provide high-quality products and services to our customers.
                  Our vision is to be the leading provider in our industry. Our
                  vision is to be the leading provider in our industry. Our
                  mission is to provide high-quality products and services to
                  our customers. Our mission is to provide high-quality products
                  and services to our customers.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BusinessValues;