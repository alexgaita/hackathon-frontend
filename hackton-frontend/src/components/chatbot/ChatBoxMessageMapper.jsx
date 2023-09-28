/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ChatBoxText from "./ChatBoxText";
import { ThreeDots } from "react-loader-spinner";

const ChatBoxMessageMapper = (props) => {
  const messages = props.messages;
  const loading = props.loading;

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
      {messages && displayMessages()}
      <Box marginRight="auto" height={30}>
        <ThreeDots
          height="30"
          width="30"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperClassName=""
          visible={loading}
          color="#001789"
          backgroundColor="#001789"
        />
      </Box>
    </Box>
  );
};

export default ChatBoxMessageMapper;
