import { Typography } from "@mui/material";

const ResuableText = (props) => {
  return (
    <Typography
      style={{
        fontWeight: props.fontWeight,
        color: "#000000",
        textAlign: "center",
        wordWrap: "break-word",
        fontSize: props.size,
        marginTop:props.marginTop,
        marginBottom:props.marginBottom
      }}
    >
      {props.name}
    </Typography>
  );
};

export { ResuableText };
