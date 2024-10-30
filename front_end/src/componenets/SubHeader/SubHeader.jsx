


import React, { useState } from 'react';
import { Box, Typography, AppBar, Tabs, Tab } from '@mui/material';

const SubHeader = ({ setProvince }) => {
    const [selectedSection, setSelectedSection] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedSection(newValue);
        const provinces = ['kabul', 'wardak', 'bamyan', 'ghor', 'urozgan'];
        setProvince(provinces[newValue]);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
            {/* Title and Province Buttons */}
            <Box sx={{ textAlign: "center", padding: "10px 0" }}>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "gray", fontSize: "20px", mt: 2 }}
                >
                    Where To Go
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black", fontSize: "35px", mt: 2 }}
                >
                    Central Provinces
                </Typography>
            </Box>
            <Tabs
                value={selectedSection}
                onChange={handleTabChange}
                centered
                sx={{
                    justifyContent: "center",
                    "& .MuiTab-root": {
                        color: "gray",
                        fontWeight: "bold",
                    },
                }}
            >
                <Tab label="Kabul" />
                <Tab label="Wardak" />
                <Tab label="Bamyan" />
                <Tab label="Ghor" />
                <Tab label="Urozgan" />
            </Tabs>
        </AppBar>
    );
};

export default SubHeader;
