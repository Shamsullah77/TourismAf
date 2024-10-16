import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Create your theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});
// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your application
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();
