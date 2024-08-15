import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import TabComponent from "../TabComponent";

const BacteriaPage = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [selectedBacteria, setSelectedBacteria] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('Kingdom');

  return (
    <Container>
      <Box my={4}>
        <TabComponent
          apiUrl={apiUrl}
          setData={setData}
          setSelectedBacteria={setSelectedBacteria}
          setSelectedLevel={setSelectedLevel}
        />
      </Box>
    </Container>
  );
};

export default BacteriaPage;
