/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import ChatBoxText from "./ChatBoxText";
import { ThreeDots } from "react-loader-spinner";

const ChatBoxMessageMapper = (props) => {
  const messages = props.messages;
  const loading = props.loading;
  const accommodations = props.accommodations;

  const displayMessages = () => {
    return messages.map((element, index) => {
      return (
        <ChatBoxText key={index} text={element.text} user={element.user} />
      );
    });
  };

  return (
    <Box
      id="chat-container"
      sx={{
        height: "60%",
        width: "90%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        overflowY: "auto",
        gap: "10px",
      }}
    >
      {messages && displayMessages()}
      <Box marginRight="auto" height={30}>
        <ThreeDots
          height="30"
          width="30"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperClassName=""
          visible={loading}
          color="#001789"
          backgroundColor="#001789"
        />
      </Box>
      {accommodations ? (
        <Box display="flex" flexDirection="row" mb={2}>
          {accommodations.length > 0 ? (
            accommodations.slice(0, 3).map((data, index) => (
              <Box
                key={index}
                onClick={() => window.open(data.link)}
                sx={{
                  cursor: "pointer",
                  marginRight: index !== 2 ? 1 : 0,
                  marginLeft: index === 0 ? 0 : 1,
                }}
                minHeight={250}
                flex={1}
                mr={2}
                display="flex"
                flexDirection="column"
                borderRadius={4}
                boxShadow="0px 3.89312px 23.35869px 0px rgba(189, 189, 189, 0.23)"
              >
                <Box flex={1}>
                  <img src={data.imageUrl} width="100%" height={100} />
                </Box>
                <Box
                  flex={1}
                  minHeight={45}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  p={2}
                >
                  <Typography variant="caption" fontWeight={"bold"}>
                    {data.name}
                  </Typography>
                  <Typography variant="caption" fontWeight={500}>
                    {data.address
                      ? data.address.substring(0, 50)
                      : "Description of the hotel"}
                  </Typography>
                </Box>
                <Box
                  flex={1}
                  pl={2}
                  pr={2}
                  display="flex"
                  flexDirection="row"
                  alignItems={"flex-end"}
                  pb={2}
                >
                  <Box
                    sx={{ flex: 1.5 }}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Box
                      sx={{ backgroundColor: "green" }}
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      p={0.5}
                      borderRadius={1}
                    >
                      9.2
                    </Box>
                    <Typography
                      pl={0.5}
                      sx={{ opacity: 0.3 }}
                      variant="caption"
                    >
                      Good Price
                    </Typography>
                  </Box>
                  <Box
                    sx={{ flex: 1 }}
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <Typography variant="body1" fontWeight="bold">
                      {data.price}€
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))
          ) : (
            <Typography>We have no data found for this criteria</Typography>
          )}
        </Box>
      ) : null}
    </Box>
  );
};

export default ChatBoxMessageMapper;
