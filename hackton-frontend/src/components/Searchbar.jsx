/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import logo from "../assets/Hotel24.png";
const Searchbar = (props) => {
  const openModal = props.open;
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: "#001789",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          right: "180px", 
        }}
      >
        <IconButton>
          <Typography color="white" variant="subtitle1">
            Home
          </Typography>
        </IconButton>
        <IconButton onClick={openModal}>
          <Typography color="white" variant="subtitle1">
            Chat
          </Typography>
        </IconButton>
        <IconButton>
          <Typography color="white" variant="subtitle1">
            Setting
          </Typography>
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: "10px", 
        }}
      >
        <Avatar sx={{ height: "50px", width: "50px" }} />
        <Typography variant="subtitle1" color="white">
          Stefan Rudareanu
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          marginLeft="10px"
          component="img"
          src={logo}
          sx={{ height: "30px", width: "auto" }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
       <IconButton>
          <Avatar
            alt="My Button"
            src={myButtonImage}
            variant="square"
            sx={{
              width: "80px", 
              height: "80px",
              position: "absolute",
              top: "10%", 
              left: "50%",
              transform: "translateX(-50%)",
               }}
                />
      </IconButton>
      </Box>
    </Box>
  );
};

export default Searchbar;
