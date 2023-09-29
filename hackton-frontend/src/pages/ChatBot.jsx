/* eslint-disable react/prop-types */
import { Box, Modal, Divider } from "@mui/material";
import ChatBotHeader from "../components/chatbot/ChatBotHeader";
import ChatBoxMessageMapper from "../components/chatbot/ChatBoxMessageMapper";
import ChatBoxTextArea from "../components/chatbot/ChatBoxTextAres";
import { requestGenerator } from "../utils/generateRequest";
import { useEffect, useState } from "react";
import { postQuestion, postQuestionLocal } from "../service/service";
const ChatBot = (props) => {
  const isOpen = props.isOpen;
  const close = props.close;
  const [messagesState, setMessagesState] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [accommodations, setAccommodations] = useState(undefined);
  const [chatType, setChatType] = useState("local");

  useEffect(() => {
    setAccommodations(undefined);
    setMessagesState([]);
    setLoading(false);
    setTextAreaValue("");
  }, [chatType]);

  const scrollToBottomOfChat = () => {
    setTimeout(() => {
      const chatContainer = document.getElementById("chat-container");
      if (chatContainer) {
        chatContainer.scroll({
          top: chatContainer.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 1000);
  };

  const handleMessageSent = async () => {
    setMessagesState((value) => [
      ...value,
      { text: textAreaValue, user: true },
    ]);
    setLoading(true);
    setTextAreaValue("");
    scrollToBottomOfChat();
    const data = await postQuestion(requestGenerator(textAreaValue));
    setLoading(false);
    setMessagesState((value) => [...value, { text: data, user: false }]);
    scrollToBottomOfChat();
  };

  const handleMessageSentLocal = async () => {
    setMessagesState((value) => [
      ...value,
      { text: textAreaValue, user: true },
    ]);
    setLoading(true);
    setTextAreaValue("");
    scrollToBottomOfChat();
    const { rows } = await postQuestionLocal({ message: textAreaValue });
    setAccommodations(rows);
    setLoading(false);
    setMessagesState((value) => [
      ...value,
      {
        text: "Based on your question we have the following accommodations.",
        user: false,
      },
    ]);
    scrollToBottomOfChat();
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
          width: "800px",
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
          chatType={chatType}
          setChatType={setChatType}
          username={"Doctari Assistant"}
          position={"We are here to help you."}
        />
        <Divider sx={{ width: "90%", backgroundColor: "#FFE33A" }} />
        <ChatBoxMessageMapper
          messages={messagesState}
          loading={loading}
          accommodations={accommodations}
        />
        <Divider sx={{ width: "90%", backgroundColor: "#FFE33A" }} />
        <ChatBoxTextArea
          textAreaValue={textAreaValue}
          setTextAreaValue={setTextAreaValue}
          handleMessageSent={() =>
            chatType === "openAi"
              ? handleMessageSent()
              : handleMessageSentLocal()
          }
        />
      </Box>
    </Modal>
  );
};

export default ChatBot;
