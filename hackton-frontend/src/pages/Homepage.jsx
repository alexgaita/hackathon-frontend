import { Box, Grid, Typography } from "@mui/material";
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
        <Grid container display="flex" flexDirection="row" width="100%" p={3.5}>
          <Grid item xs={6} >
            <AccommodationsBased />
          </Grid>
          <Grid item xs={6} >
            <MostSearchedCities />
          </Grid>
        </Grid>
        <Box p={4} pt={0}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Fira Sans, sans-serif", marginBottom: "14px" }}>
            Upcoming Events
          </Typography>
          <UpcomingEvents />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
