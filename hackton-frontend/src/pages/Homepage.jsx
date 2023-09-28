import { Box, Typography, Grid } from "@mui/material";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import ChatBot from "./ChatBot";
import UpcomingEvents from "../components/UpcomingEvents";

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
        alignItems: "center",
      }}
    >
      <Searchbar open={handleOpenModal} />
      <ChatBot isOpen={isOpenModal} close={handleCloseModal} />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
      </Box>

      <Grid
        container
        direction="column"
        alignItems="flex-start"
        sx={{
          flex: 1,
          padding: "20px", 
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" sx={{ marginBottom: "10px", fontFamily: "Fira Sans, sans-serif" }}>
          Upcoming Events
        </Typography>
        <UpcomingEvents />
      </Grid>
    </Box>
  );
};

export default Homepage;
