import React, { useState, useEffect } from "react";
import { Typography, Box, Container } from "@mui/material";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

import * as STAT_REQ from '../api/statistics'

const MostSearchedCities = () => {
  const [cityData, setCityData] = useState([]);

  const backgroundImages = [
    image1, image2, image3
  ];

  useEffect(() => {
    handleGetMostSearched()
  }, []);

  const handleGetMostSearched = async () => {
    try {
      const response = await STAT_REQ.getMostSearchedCities()
      console.log(response)
      setCityData(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  const getRandomBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ fontFamily: "Fira Sans, sans-serif", fontWeight: "bold", marginBottom: "14px" }}>
        Most Searched Cities
      </Typography>
      <Box display="flex" flexDirection="row">
        {cityData.map((cityInfo, index) => (
          <Box
            key={index}
            borderRadius={3}
            sx={{
              ml: index === 0 ? 0 : 3,
              width: 250,
              height: 250,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundImage: `url(${getRandomBackgroundImage()})`,
              backgroundSize: "cover",
            }}
          >
            <Box sx={{ flex: 0.3 }} />
            <Box sx={{ flex: 1 }} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h4" fontWeight="bold" color={"white"}>
                {cityInfo.city}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" pb={2}>
              <Box display="flex" alignItems="center" sx={{
                height: '25px',
                backgroundColor: cityInfo.statistic === "low" ? "green" : "red",
              }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white"
                  }}
                >
                  {cityInfo.statistic === "low" ? "Low" : "High"} price{" "}
                  <Typography variant="h8" fontWeight="bold" component="span" sx={{ marginRight: "10px", marginLeft: "10px" }}>
                    {cityInfo.meanPrice + "%"}
                  </Typography>
                </Typography>
              </Box>
              <Box
                pr={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: 'auto'
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{
                    color: "white",
                  }}
                >
                  {cityInfo.currentPrice + " €"}
                </Typography>
                <Typography ml={'auto'} sx={{ fontSize: "10px", color: "white" }}>
                  Per night
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MostSearchedCities;
