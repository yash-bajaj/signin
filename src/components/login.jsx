import React from "react";
import { ResuableText } from "../atoms/text";
import { ReusableButton } from "../atoms/button";
import ResuableTextField from "../atoms/textfield";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const signupdiv = {
  background: "rgb(255,255,255)",
  background:
    "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(230,208,194,1) 0%, rgba(231,172,136,1) 100%)",
  borderRadius: "20px",
  paddingLeft: "4%",
  paddingRight: "4%",
  paddingTop: "5%",
  paddingBottom: "15%",
  height:"100%"
};

class Login extends React.Component {
  render() {
    return (
      <Stack irection="row"   justifyContent="center"
      alignItems="center"style={signupdiv}>
        <ResuableText
          name="Login "
          size={"200%"}
          marginTop={"1%"}
          marginBottom={"5%"}
          fontWeight="bold"
        />
        <ResuableTextField label="Email" />
        <ResuableTextField label="Password" />
        <Box
          textAlign="center"
          style={{ paddingTop: "1%", paddingBottom: "1%" }}
        >
          <ReusableButton
            name="Login"
            color={"#5B6580"}
            marginBottom={"5%"}
            marginTop={"5%"}
          />
        </Box>
        <ResuableText name="Create An Account?" />
        <Link to="/signup">  <ResuableText name="Register" /></Link>
      
      </Stack>
    );
  }
}

export default Login;
