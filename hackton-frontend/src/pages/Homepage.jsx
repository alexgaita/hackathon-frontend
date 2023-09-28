import { Box, Typography, Grid } from "@mui/material";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import ChatBot from "./ChatBot";
import UpcomingEvents from "../components/UpcomingEvents";
import MostSearchedCities from "../components/MostSearchedCities"
import AccommodationsBased from "../components/AccommodationsBased"

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
      <Box pt={2}>
        <Box display="flex" flexDirection="row" flex={1} width="100%" p={3.5}>
          <Box sx={{ flex: 1 }}>
            <AccommodationsBased />
          </Box>
          <Box sx={{ flex: 1 }}>
            <MostSearchedCities />
          </Box>
        </Box>
        <Box p={4} pt={0}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Fira Sans, sans-serif",  marginBottom: "14px"  }}>
            Upcoming Events
          </Typography>
          <UpcomingEvents />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
