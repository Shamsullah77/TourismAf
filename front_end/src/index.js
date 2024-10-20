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
      main: "#005a69", // Customize your primary color
      light:'#00869e',
      dark:'#003038',
    },
    secondary: {
      main: "#f58b00", // Customize your secondary color
      light:'#f8bc24'
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
