import React, { useState } from "react";
import {Grid,Typography,Box,Paper,Button,FormGroup,FormControlLabel,Checkbox,Select,MenuItem,} from "@mui/material";

const SearchBox = () => (
    <Paper
      elevation={3}
      sx={{
        width: "280px",
        padding: "8px", // Reduced padding for a more compact design
        textAlign: "left",
        bgcolor: "#ffffff",
        // marginTop: "10px",
        minHeight: "380px", // Reduced minimum height
      }}
    >
      <Typography sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        {" "}
        {/* Reduced margin */}
        Search
      </Typography>
      <Select
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: "20px", // Reduced margin
          height: "40px", // Reduced height for the select box
          "& .MuiSelect-select": {
            height: "30px", // Ensure the select's inner height matches
            display: "flex",
            alignItems: "center",
          },
          "& .MuiOutlinedInput-root": {
            height: "30px", // Ensure the root height matches
          },
        }}
        defaultValue=""
        displayEmpty
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200, // Set maximum height for the dropdown
              width: 220, // Match the width of the select
            },
          },
        }}
      >
        <MenuItem value="" disabled>
          Select Province
        </MenuItem>
        {[ "Badakhshan","Badghis","Baghlan","Balkh","Bamyan","Daykundi","Farah","Faryab","Ghazni","Ghor","Helmand","Herat","Jowzjan","Kabul","Kandahar","Kapisa",
          "Khost","Kunar","Kunduz","Nangarhar","Nimroz","Nuristan","Paktia","Paktika","Panjshir","Samangan","Sar-e Pol","Takhar","Urozgan","Wardak","Zabul",].map((province) => (
          <MenuItem key={province} value={province}>
            {province}
          </MenuItem>
        ))}
      </Select>
      <Typography
        variant="body2"
        sx={{ marginBottom: "8px", cursor: "pointer", color: "green" }} // Reduced margin
      >
        ADVANCED SEARCH +
      </Typography>
      <FormGroup sx={{ marginBottom: "8px" }}>
        {" "}
        {/* Reduced margin */}
        {["Apartments", "Hotels", "Boats", "Villas"].map((label) => (
          <FormControlLabel
            key={label}
            control={<Checkbox />}
            label={
              <span style={{ textAlign: "left", width: "100%" }}>{label}</span>
            }
            sx={{ justifyContent: "flex-start" }}
          />
        ))}
      </FormGroup>
      <Button
        variant="contained"
        sx={{
          bgcolor: "green",
          color: "white",
          width: "100%",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      >
        Search
      </Button>
    </Paper>
  );
  export default SearchBox;