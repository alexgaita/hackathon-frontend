/* eslint-disable react/prop-types */
import { Avatar, Box, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import myButtonImage from "../../assets/microphone_button.png";

const ChatBoxTextArea = (props) => {
  const setTextAreaValue = props.setTextAreaValue;
  const handleMessageSent = props.handleMessageSent;
  const textAreaValue = props.textAreaValue;

  return (
    <Box
      sx={{
        width: "100%",
        height: "17%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box flex={1} display="flex" flexDirection="row" sx={{ paddingLeft: '27px', paddingBottom: '18px' }}>
        <TextField
          color="#001789"
          placeholder="Type your question...."
          sx={{
            width: "90%",
            backgroundColor: "rgba( 255,227,58,.2)",
            borderRadius: "10px",
            padding: 0.5,
            paddingLeft: 2,
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
        >
        </TextField>
        <SendIcon onClick={handleMessageSent} sx={{ color: "#001789", position: 'relative', left: "-48px", top: "50px", cursor: 'pointer' }} />
      </Box>
      <Box width={40}>
        <Avatar
          alt="My Button"
          src={myButtonImage}
          variant="square"
          sx={{
            cursor: 'pointer',
            width: "40px",
            height: "40px",
            border: "4px solid white",
            borderRadius: 4,
            position: 'relative',
            left: "-20px",
            top: "50px"
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatBoxTextArea;
