import React from "react";
import { Card, CardContent, Typography, Box, Grid, ThemeProvider, createTheme } from "@mui/material";

import image1 from "../assets/upcoming1.png"
import image2 from "../assets/upcoming2.png"
import image3 from "../assets/upcoming3.png"

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'Bold 700',
    ].join(','),
  },
});

const cardData = [
  {
    imageUrl: image1,
    title: "Champions League Final",
    subtitle: "Munich",
    description: "The 2024 UEFA Champions League final will be played at the Allianz Arena in Munich, \
    It will be the 69th season of Europe's premier club football tournament organised by UEFA. Let's go and play some football.",
    duration: "Sat, Sep 16 2023 - Tue, Oct 3 2023", // Duration text
    demand: "Very High Demand",
    forecast: "+230%",
    price_range: "250€ - 570€"
  },
  {
    imageUrl: image2,
    title: "Octoberfest",
    subtitle: "Munich",
    description: "Oktoberfest is the world's largest beer festival, held in Munich, Germany. \
    It features massive beer tents, traditional Bavarian food, and lively music, \
    drawing millions of visitors from around the globe.",
    duration: "Sat, Sep 16 2023 - Tue, Oct 3 2023", // Duration text
    demand: "Very High Demand",
    forecast: "+510%",
    price_range: "750€ - 1790€"
  },
  {
    imageUrl: image3,
    title: "IFA - Internationale Funkausstellung",
    subtitle: "Berlin",
    description: "The world's largest consumer electronics trade show is gearing up to celebrate a \
    century of technological advancements. For 100 years, IFA has remained at the forefront of technology and innovation.",
    duration: "Sat, Sep 16 2023 - Tue, Oct 3 2023", // Duration text,
    demand: "Very High Demand",
    forecast: "+150%",
    price_range: "130€ - 790€"
  },
];

const UpcomingEvents = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            borderRadius={2}
            p={2}
            mr={index !== 2 ? 2 : 0}
            ml={index !== 0 ? 2 : 0}
            sx={{
              flex: 1,
              background: `url(${card.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              color: "white",
              position: "relative",
            }}
          >
            <Box>
              <Typography variant="caption" fontWeight={500}> {card.duration}</Typography>
              <Typography variant="h6" sx={{ fontFamily: "Fira Sans, sans-serif", fontWeight: "bold" }} >
                {card.title}
              </Typography>
              <Typography variant="caption" color="inherit" sx={{ fontFamily: "Fira Sans, sans-serif" }}>
                {card.subtitle}
              </Typography>
              <Typography pt={2} variant="body2" color="inherit" sx={{ fontFamily: "Fira Sans, sans-serif" }}>
                {card.description}
              </Typography>
            </Box>
            <Box
              pt={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ color: "white", textAlign: "center" }}>
                <Typography variant="body2" sx={{ fontSize: "8px" }}>Demand</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", fontFamily: "Fira Sans, sans-serif" }} >
                  {card.demand}
                </Typography>
              </Box>
              <Box sx={{ color: "white", textAlign: "center" }}>
                <Typography variant="body2" sx={{ fontSize: "8px" }}>Forecast</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", fontFamily: "Fira Sans, sans-serif" }}>
                  {card.forecast}
                </Typography>
              </Box>
              <Box sx={{ color: "white", textAlign: "center", }}>
                <Typography variant="body2" sx={{ fontSize: "8px" }}>Price Range</Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", fontFamily: "Fira Sans, sans-serif" }}>
                  {card.price_range}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default UpcomingEvents;
