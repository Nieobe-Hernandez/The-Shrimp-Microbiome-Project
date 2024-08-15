import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import BacteriaTableKingdom from "./bacteria/BacteriaTableKingdom";
import BacteriaTablePhylum from "./bacteria/BacteriaTablePhylum";
import BacteriaTableClass from "./bacteria/BacteriaTableClass";
import BacteriaTableOrder from "./bacteria/BacteriaTableOrder";
import BacteriaTableFamily from "./bacteria/BacteriaTableFamily";
import BacteriaTableGenus from "./bacteria/BacteriaTableGenus";
import BacteriaTableSpecies from "./bacteria/BacteriaTableSpecies";
import BacteriaCharts from "../components/charts/BacteriaCharts";
import GlobalChart from "./charts/GlobalChart";
import IndividualChart from "./charts/IndividualChart";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [states, setStates] = useState({
    Kingdom: { searchQuery: "", data: [], selectedBacteria: null },
    Phylum: { searchQuery: "", data: [], selectedBacteria: null },
    Class: { searchQuery: "", data: [], selectedBacteria: null },
    Order: { searchQuery: "", data: [], selectedBacteria: null },
    Family: { searchQuery: "", data: [], selectedBacteria: null },
    Genus: { searchQuery: "", data: [], selectedBacteria: null },
    Species: { searchQuery: "", data: [], selectedBacteria: null },
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleStateChange = (level, newState) => {
    setStates((prevStates) => ({
      ...prevStates,
      [level]: newState,
    }));
  };

  const levels = [
    "Kingdom",
    "Phylum",
    "Class",
    "Order",
    "Family",
    "Genus",
    "Species",
  ];
  const selectedLevel = levels[activeTab];
  const selectedBacteria = states[selectedLevel].selectedBacteria;

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Kingdom" />
        <Tab label="Phylum" />
        <Tab label="Class" />
        <Tab label="Order" />
        <Tab label="Family" />
        <Tab label="Genus" />
        <Tab label="Species" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        <div style={{ display: activeTab === 0 ? "block" : "none" }}>
          <BacteriaTableKingdom
            apiUrl="/api/datos-taxonomicos/nivel/Kingdom"
            savedState={states.Kingdom}
            onStateChange={(newState) => handleStateChange("Kingdom", newState)}
          />
          <GlobalChart selectedLevel="Kingdom" />
        </div>
        <div style={{ display: activeTab === 1 ? "block" : "none" }}>
          <BacteriaTablePhylum
            apiUrl="/api/datos-taxonomicos/nivel/Phylum"
            savedState={states.Phylum}
            onStateChange={(newState) => handleStateChange("Phylum", newState)}
          />
          <GlobalChart selectedLevel="Phylum" />
        </div>
        <div style={{ display: activeTab === 2 ? "block" : "none" }}>
          <BacteriaTableClass
            apiUrl="/api/datos-taxonomicos/nivel/Class"
            savedState={states.Class}
            onStateChange={(newState) => handleStateChange("Class", newState)}
          />
          <GlobalChart selectedLevel="Class" />
        </div>
        <div style={{ display: activeTab === 3 ? "block" : "none" }}>
          <BacteriaTableOrder
            apiUrl="/api/datos-taxonomicos/nivel/Order"
            savedState={states.Class}
            onStateChange={(newState) => handleStateChange("Order", newState)}
          />
          <GlobalChart selectedLevel="Order" />
        </div>
        <div style={{ display: activeTab === 4 ? "block" : "none" }}>
          <BacteriaTableFamily
            apiUrl="/api/datos-taxonomicos/nivel/Family"
            savedState={states.Class}
            onStateChange={(newState) => handleStateChange("Family", newState)}
          />
          <GlobalChart selectedLevel="Family" />
        </div>
        <div style={{ display: activeTab === 5 ? "block" : "none" }}>
          <BacteriaTableGenus
            apiUrl="/api/datos-taxonomicos/nivel/Genus"
            savedState={states.Class}
            onStateChange={(newState) => handleStateChange("Genus", newState)}
          />
          <GlobalChart selectedLevel="Genus" />
        </div>
        <div style={{ display: activeTab === 6 ? "block" : "none" }}>
          <BacteriaTableSpecies
            apiUrl="/api/datos-taxonomicos/nivel/Species"
            savedState={states.Class}
            onStateChange={(newState) => handleStateChange("Species", newState)}
          />
          <GlobalChart selectedLevel="Species" />
        </div>
        <Box>
          <IndividualChart
            selectedBacteria={selectedBacteria}
            selectedLevel={selectedLevel}
          />
        </Box>
      </Box>
      <BacteriaCharts selectedBacteria={selectedBacteria} />
    </Box>
  );
};

export default TabComponent;
