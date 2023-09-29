/* eslint-disable react/prop-types */
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatBoxTextArea = (props) => {
  const setTextAreaValue = props.setTextAreaValue;
  const handleMessageSent = props.handleMessageSent;
  const textAreaValue = props.textAreaValue;

  return (
    <Box
      sx={{
        width: "90%",
        height: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: "12px"
      }}
    >
      <TextField
        color="#001789"
        placeholder="Type your question...."
        sx={{
          width: "90%",
          backgroundColor: "rgba( 255,227,58,.2)",
          borderRadius: "10px",
          padding: 0.5,
        }}
        onChange={(e) => {
          setTextAreaValue(e.target.value);
        }}
        value={textAreaValue}
        multiline
        rows={3}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />
      <IconButton
        onClick={handleMessageSent}
        sx={{ marginTop: "auto", marginBottom: "35px", zIndex: 1 }}
        size="small"
      >
        <SendIcon sx={{ color: "#001789" }} />
      </IconButton>
    </Box>
  );
};

export default ChatBoxTextArea;
