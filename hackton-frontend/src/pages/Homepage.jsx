import { Box } from "@mui/material";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import ChatBot from "./ChatBot";
const Homepage = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "cenet",
      }}
    >
      <Searchbar open={handleOpenModal} />
      <ChatBot isOpen={isOpenModal} close={handleCloseModal} />
    </Box>
  );
};

export default Homepage;
