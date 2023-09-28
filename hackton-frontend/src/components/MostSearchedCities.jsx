import React, { useState, useEffect } from "react";
import { Card, Typography, Box, Container } from "@mui/material";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"


const MostSearchedCities = () => {
  const [cityData, setCityData] = useState([]);
  
  
  const backgroundImages = [
   image1, image2, image3
  ];

  useEffect(() => {
    fetch("http://localhost:5001/api/statistics/searched-cities")
      .then((response) => response.json())
      .then((data) => {
        setCityData(data.data.slice(0,3));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);

  const getRandomBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  return (
    <Container>
      <Typography variant="h7" sx={{ fontFamily: "Fira Sans, sans-serif", fontWeight: "bold", marginBottom:"14px"}}>
        Most Searched Cities
      </Typography>
      <Box display="flex">
        {cityData.map((cityInfo, index) => (
          <Card
            key={index}
            sx={{
              width: 250,
              height: 250, 
              marginRight: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center", 
              justifyContent: "center", 
              position: "relative", 
              backgroundImage:  `url(${getRandomBackgroundImage()})`, 
              backgroundSize: "cover", 
            }}
          >
            <Typography variant="h4" fontWeight="bold" color={"white"}>
              {cityInfo.city}
            </Typography>
            <Typography
              variant="h7"
              sx={{
                textAlign: "left",
                position: "absolute",
                bottom: "20px",
                left: "5px",
                backgroundColor: cityInfo.statistic === "low" ? "green" : "red",
                color:"white"
              }}
            >
              {cityInfo.statistic === "low" ? "Low" : "High"} price{" "} 
              <Typography variant="h8" fontWeight="bold" component="span" sx={{marginRight:"10px", marginLeft:"10px"}}>
                {cityInfo.meanPrice+ "%"}
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                position: "absolute",
                bottom: "5px",
                right: "5px",
              }}
            >
              <Typography
                variant="h7"
                fontWeight={"bold"}
                sx={{
                  color: "white",
                  padding: "2px 5px",
                  borderRadius: "4px",
                }}
              >
                {cityInfo.currentPrice + "€"}
              </Typography>
              <Typography sx={{ fontSize: "10px", color:"white" }}>
                Per night
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default MostSearchedCities;
