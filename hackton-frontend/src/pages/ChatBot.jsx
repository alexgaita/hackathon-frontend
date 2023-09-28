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
  const [loading, setLoading] = useState(true);
  const handleMessageSent = async () => {
    setMessagesState((value) => [
      ...value,
      { text: textAreaValue, user: true },
    ]);
    setLoading(true);
    const data = await postQuestion(requestGenerator(textAreaValue)).then(
      setLoading(false)
    );
    setMessagesState((value) => [...value, { text: data, user: false }]);
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
          username={username}
          position={"Medical Assistant"}
        />
        <Divider sx={{ width: "90%", backgroundColor: "#FFE33A" }} />
        <ChatBoxMessageMapper messages={messagesState} loading={loading} />
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
