/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
const ChatBoxText = (props) => {
  const text = props.text;
  const color = props.user ? "#32A636" : "#001789";
  const marginLeft = props.user ? "auto" : "";
  const marginRight = !props.user ? "auto" : "";

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: color,
          maxWidth: "400px",
          height: "auto",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: { marginLeft },
          marginRight: { marginRight },
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        <Typography color="#FFFFFF" variant="subtitle2">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatBoxText;
