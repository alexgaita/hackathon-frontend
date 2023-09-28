/* eslint-disable react/prop-types */
import { Box, IconButton } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import SendIcon from "@mui/icons-material/Send";

const ChatBoxTextArea = (props) => {
  const setTextAreaValue = props.setTextAreaValue;
  const handleMessageSent = props.handleMessageSent;

  return (
    <Box
      sx={{
        width: "90%",
        height: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Textarea
        color="#FFE33A"
        sx={{
          width: "90%",
          backgroundColor: "rgba( 255,227,58,.2)",
          color: "#001789",
        }}
        onChange={(e) => {
          setTextAreaValue(e.target.value);
        }}
        minRows={3}
      ></Textarea>
      <IconButton
        onClick={handleMessageSent}
        sx={{ marginTop: "auto", marginBottom: "30px" }}
        size="small"
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatBoxTextArea;
