/* eslint-disable react/prop-types */
import { Box, Modal, Divider } from "@mui/material";
import ChatBotHeader from "../components/chatbot/ChatBotHeader";
import ChatBoxMessageMapper from "../components/chatbot/ChatBoxMessageMapper";
import ChatBoxTextArea from "../components/chatbot/ChatBoxTextAres";
import { requestGenerator } from "../utils/generateRequest";
import { useState } from "react";
import { postQuestion } from "../service/service";
const ChatBot = (props) => {
  const username = localStorage.getItem("username");
  const isOpen = props.isOpen;
  const close = props.close;
  const [messagesState, setMessagesState] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToBottomOfChat = () => {
    setTimeout(() => {
      const chatContainer = document.getElementById('chat-container')
      if (chatContainer) {
        chatContainer.scroll({ top: chatContainer.scrollHeight, behavior: 'smooth' });
      }
    }, 1000);
  }

  const handleMessageSent = async () => {
    setMessagesState((value) => [
      ...value,
      { text: textAreaValue, user: true },
    ]);
    setLoading(true);
    setTextAreaValue('')
    scrollToBottomOfChat()
    const data = await postQuestion(requestGenerator(textAreaValue))
    setLoading(false)
    setMessagesState((value) => [...value, { text: data, user: false }]);
    scrollToBottomOfChat()
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
          close={close}
          username={"Doctari Assistant"}
          position={"We are here to help you."}
        />
        <Divider sx={{ width: "90%", backgroundColor: "#FFE33A" }} />
        <ChatBoxMessageMapper messages={messagesState} loading={loading} />
        <Divider sx={{ width: "90%", backgroundColor: "#FFE33A" }} />
        <ChatBoxTextArea
          textAreaValue={textAreaValue}
          setTextAreaValue={setTextAreaValue}
          handleMessageSent={handleMessageSent}
        />
      </Box>
    </Modal>
  );
};

export default ChatBot;
