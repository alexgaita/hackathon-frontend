/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ChatBoxText from "./ChatBoxText";

const ChatBoxMessageMapper = (props) => {
  const messages = props.messages;

  const displayMessages = () => {
    return messages.map((element, index) => {
      return (
        <ChatBoxText key={index} text={element.text} user={element.user} />
      );
    });
  };

  return (
    <Box
      sx={{
        height: "60%",
        width: "90%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        overflowY: "auto",
        gap: "10px",
      }}
    >
      {displayMessages()}
    </Box>
  );
};

export default ChatBoxMessageMapper;
