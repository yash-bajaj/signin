import { InputBase, Paper } from "@mui/material";

const ResuableTextField = (props) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        marginBottom: "5%",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.label}
        style={{ color: "#000000" }}
      />
    </Paper>
  );
};

export default ResuableTextField;
