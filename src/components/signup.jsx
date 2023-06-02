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
  paddingLeft: "4%",
  paddingRight: "4%",
  paddingTop: "5%",
  paddingBottom: "5%",
  height:"100%"
};

class SignUp extends React.Component {
  render() {
    return (
      <Stack irection="row"   justifyContent="center"
      alignItems="center"style={signupdiv}>
        <ResuableText
          name="Create An Account "
          size={"200%"}
          marginTop={"1%"}
          marginBottom={"10%"}
          fontWeight="bold"
        />
        <ResuableTextField label="Full Name" />
        <ResuableTextField label="Email" />
        <ResuableTextField label="Password" />
        <ResuableTextField label="Confirm Password" />
        <Box
          textAlign="center"
          style={{ paddingTop: "1%", paddingBottom: "1%" }}
        >
          <ReusableButton
            name="Register"
            color={"#5B6580"}
            marginBottom={"5%"}
            marginTop={"5%"}
          />
        </Box>
        <ResuableText name="Already Have An Account?" />
       <Link to="/"> <ResuableText name=" Sign In" /></Link>
      </Stack>
    );
  }
}

export default SignUp;
