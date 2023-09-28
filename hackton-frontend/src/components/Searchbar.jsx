import { Avatar, Box, IconButton, Typography } from "@mui/material";
import logo from "../assets/Hotel24.png";
const Searchbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: "#001789",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
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

      <Box
        sx={{
          width: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginLeft: "auto",
        }}
      >
        <IconButton>
          <Typography color="white" variant="subtitle1">
            Home
          </Typography>
        </IconButton>
        <IconButton>
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
        marginRight="10px"
        sx={{
          width: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ height: "50px", width: "50px" }} />
        <Typography variant="subtitle1" color="white">
          Stefan Rudareanu
        </Typography>
      </Box>
    </Box>
  );
};

export default Searchbar;
