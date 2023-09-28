/* eslint-disable react/prop-types */
import { Box, Modal, Divider } from "@mui/material";
import ChatBotHeader from "../components/chatbot/ChatBotHeader";
import ChatBoxMessageMapper from "../components/chatbot/ChatBoxMessageMapper";
import messages from "../utils/constants";
import ChatBoxTextArea from "../components/chatbot/ChatBoxTextAres";
import { useState } from "react";
const ChatBot = (props) => {
  const isOpen = props.isOpen;
  const close = props.close;
  const [messagesState, setMessagesState] = useState(messages);
  const [textAreaValue, setTextAreaValue] = useState("");
  const handleMessageSent = () => {
    setMessagesState((value) => [
      ...value,
      { text: textAreaValue, user: true },
    ]);
  };

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={isOpen}
      onClose={close}
    >
      <Box
        sx={{
          backgroundColor: "rgb(255,255,255)",
          height: "85%",
          width: "600px",
          marginTop: "50px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <ChatBotHeader
          username={"Lauren Jones"}
          position={"Medical Assistant"}
        />
        <Divider sx={{ width: "90%", backgroundColor: "#FFE33A" }} />
        <ChatBoxMessageMapper messages={messagesState} />
        <Divider sx={{ width: "90%", backgroundColor: "#FFE33A" }} />
        <ChatBoxTextArea
          setTextAreaValue={setTextAreaValue}
          handleMessageSent={handleMessageSent}
        />
      </Box>
    </Modal>
  );
};

export default ChatBot;
