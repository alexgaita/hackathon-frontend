/* eslint-disable react/prop-types */
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import profilepic from "../../assets/Profile.jpg";

const ChatBotHeader = (props) => {
  const username = props.username;
  const position = props.position;
  const handleClose = props.close;
  return (
    <Box
      sx={{
        width: "100%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Avatar
        sx={{ marginLeft: "10px", height: "75px", width: "75px" }}
        src={profilepic}
      />
      <Box
        sx={{
          width: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10p",
        }}
      >
        <Typography variant="h5">{username}</Typography>
        <Typography variant="subtitle1">{position}</Typography>
      </Box>
      <IconButton
        onClick={handleClose}
        sx={{ marginRight: "10px", marginLeft: "auto" }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ChatBotHeader;
