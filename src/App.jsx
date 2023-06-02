import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import SignUpPage from "./pages/signuppage";
import LoginPage from "./pages/loginpage";

const App = () => {
  const theme = createTheme({
    palette: {
      text: {
        primary: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
