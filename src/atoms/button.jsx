import { Button } from "@mui/material";

const ReusableButton = (props) => {
  return (
    <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: props.color,
        fontWeight: "bold",
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
      }}
    >
      {props.name}
    </Button>
  );
};

export { ReusableButton };
