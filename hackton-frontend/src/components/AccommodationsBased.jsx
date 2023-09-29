import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import image1 from "../assets/image1.png"

import * as STAT_REQ from '../api/statistics'

const AccommodationsBased = () => {
    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        handleGetMostSearched()
    }, []);

    const handleGetMostSearched = async () => {
        try {
            const response = await STAT_REQ.getAccommodationsBased()
            setCityData(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Box>
            <Typography variant="h6" sx={{ fontFamily: "Fira Sans, sans-serif", fontWeight: "bold", marginBottom: "14px" }}>
                Accomodations for top searches
            </Typography>
            <Box display="flex" flexDirection="row">
                {Object.keys(cityData).map((key, index) => (
                    <Box key={index} onClick={() => window.open(cityData[key].link)} sx={{ cursor: 'pointer' }} minHeight={250} flex={1} mr={2} display="flex" flexDirection="column" borderRadius={4} boxShadow="0px 3.89312px 23.35869px 0px rgba(189, 189, 189, 0.23)">
                        <Box flex={1}>
                            <img src={image1} width="100%" height={100} />
                        </Box>
                        <Box flex={1} minHeight={45} display="flex" flexDirection="column" alignItems="flex-start" p={2}>
                            <Typography variant="caption" fontWeight={'bold'}>
                                {cityData[key].name}
                            </Typography>
                            <Typography variant="caption" fontWeight={500}>
                                {cityData[key].description ? cityData[key].description.substring(0, 50) : 'Description of the hotel'}
                            </Typography>
                        </Box>
                        <Box flex={1} pl={2} pr={2} display="flex" flexDirection="row" alignItems={"flex-end"} pb={2}>
                            <Box sx={{ flex: 1.5 }} display="flex" flexDirection="row" alignItems="center">
                                <Box sx={{ backgroundColor: 'green' }} display="flex" flexDirection="row" alignItems="center" justifyContent="center" color="white" p={.5} borderRadius={1}>9.2</Box>
                                <Typography pl={.5} sx={{opacity: 0.3}} variant="caption">Good Price</Typography>
                            </Box>
                            <Box sx={{ flex: 1 }} display="flex" justifyContent="flex-end">
                            <Typography variant="body1" fontWeight="bold">30€</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default AccommodationsBased;
