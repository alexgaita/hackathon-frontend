/* eslint-disable react/prop-types */
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import profilepic from "../../assets/Profile.jpg";

const ChatBotHeader = (props) => {
  const username = props.username;
  const position = props.position;
  const handleClose = props.close;
  const { chatType, setChatType } = props

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
        paddingLeft: 6,
        paddingTop: 1
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
        }}
      >
        <Typography fontWeight={600} sx={{ letterSpacing: 2 }} variant="h6">{username}</Typography>
        <Typography variant="subtitle2">{position}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" ml="auto">
        <Box p={0.5} display="flex" flexDirection="row" width={120} height={35} borderRadius={8} alignItems={"center"} justifyContent={"center"} bgcolor={"#EBEBEB"}>
          <Box onClick={() => setChatType('openAi')} sx={{ cursor: 'pointer', backgroundColor: chatType === 'openAi' ? "white" : "", height: '100%', borderRadius: 8 }} flex={1} textAlign={"center"} display="flex" alignItems="center">
            <Typography color="#7A7A7A" variant="caption">Chat GPT</Typography>
          </Box>
          <Box onClick={() => setChatType('local')} flex={1} textAlign={"center"} sx={{ cursor: 'pointer', backgroundColor: chatType === 'local' ? "white" : "", height: '100%', borderRadius: 8 }} alignItems="center" display="flex" justifyContent={"center"}>
            <Typography color="#7A7A7A" variant="caption">Local</Typography>
          </Box>
        </Box>
        <IconButton
          onClick={handleClose}
          sx={{ marginRight: "40px", marginLeft: "auto" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBotHeader;
