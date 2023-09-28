import { Box } from "@mui/material";
import Searchbar from "../components/Searchbar";
const Homepage = () => {
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
      <Searchbar />
    </Box>
  );
};

export default Homepage;
