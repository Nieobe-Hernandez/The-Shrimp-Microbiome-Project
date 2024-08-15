import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AxiosClient from '../../config/http-client/axios-client';
import { Bar, Line } from 'react-chartjs-2';
import {
    CircularProgress, Typography, FormControl, InputLabel, Select, MenuItem,
    Box, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem,
    ListItemText, Collapse, ListItemButton, Paper, ListItemIcon, Checkbox, Tooltip,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import 'chart.js/auto';
import { Button } from "flowbite-react";

const GlobalChart = ({ selectedLevel }) => {
    const [chartData, setChartData] = useState(null);
    const [cachedData, setCachedData] = useState({});
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [chartType, setChartType] = useState('stackedBar');
    const [open, setOpen] = useState(false);
    const [listOpen, setListOpen] = useState(false);
    const [hiddenDatasets, setHiddenDatasets] = useState({});
    const [showChart, setShowChart] = useState(false);
    const [showNDGroup, setShowNDGroup] = useState(false); // Estado para controlar la visibilidad del grupo '(nd)'

    const fetchData = async () => {
        setLoading(true);
        setError(null);
    
        try {
            if (cachedData[selectedLevel]) {
                setChartData(cachedData[selectedLevel]);
            } else {
                const response = await AxiosClient.get(`/api/datos-taxonomicos/nivel/${selectedLevel}/grafica`);
                const data = response.data;
    
                if (data.length === 0) {
                    setError("No data available for the selected criteria");
                    setLoading(false);
                    return;
                }
    
                const groupedData = data.reduce((acc, item) => {
                    if (!acc[item.muestra]) {
                        acc[item.muestra] = {};
                    }
    
                    const nameKey = item.nombre.includes('__(nd)') ? '(nd) group' : item.nombre;
                    acc[item.muestra][nameKey] = (acc[item.muestra][nameKey] || 0) + item.valor;
                    return acc;
                }, {});
    
                const labels = Object.keys(groupedData);
                const bacteriaNames = [...new Set(data.map(item => item.nombre.includes('(nd)') ? '(nd) group' : item.nombre))].sort();
    
                const datasets = bacteriaNames.map((bacteria, index) => {
                    const data = labels.map(label => groupedData[label][bacteria] || 0);
                    return {
                        label: bacteria,
                        data,
                        backgroundColor: getColor(index, 0.5),
                        borderColor: getColor(index),
                        borderWidth: 1,
                        barThickness: 10,
                    };
                });
    
                const chartData = {
                    labels,
                    datasets,
                };
    
                setChartData(chartData);
                setCachedData(prevState => ({
                    ...prevState,
                    [selectedLevel]: chartData,
                }));
                
                // Ocultar el grupo '(nd)' inicialmente
                setHiddenDatasets(datasets.reduce((acc, dataset, index) => {
                    if (dataset.label === '(nd) group') {
                        acc[index] = true;  // Oculta el dataset inicialmente
                    }
                    return acc;
                }, {}));
            }
        } catch (error) {
            setError("Error fetching data: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleNDGroupVisibility = () => {
        setShowNDGroup(prevState => !prevState);
    };

    useEffect(() => {
        if (showChart) {
            fetchData();
        }
    }, [selectedLevel, showChart]);

    const getColor = (index, alpha = 1) => {
        const colors = [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FFFF00', '#66CDAA', '#FF6347', '#008080',
            '#E7E9ED', '#76D7C4', '#F7DC6F', '#AF7AC5', '#F1948A', '#45B39D', '#F5B041', '#D7BDE2', '#AED6F1', '#DDA0DD',
            '#85C1E9', '#F0B27A', '#A569BD', '#D98880', '#5499C7', '#FAD7A0', '#A9CCE3', '#D2B48C', '#87CEEB', '#4682B4',
            '#F7DB3A', '#3AF7DD', '#3ACCF7', '#BB8FCE', '#EC7063', '#48C9B0', '#BC8F8F', '#D87093', '#98FB98', '#FFFFE0',
            '#F0FFFF', '#8A2BE2', '#FF69B4', '#CD5C5C', '#B0E0E6', '#D8BFD8', '#E6E6FA', '#40E0D0', '#EE82EE', '#F5DEB3',
        ];
        const color = colors[index % colors.length];
        const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const handleChartTypeChange = (event) => {
        setChartType(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleListClick = () => {
        setListOpen(!listOpen);
    };

    const toggleDatasetVisibility = (index) => {
        setHiddenDatasets(prevState => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleLoadChart = () => {
        setShowChart(true);
    };

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                stacked: true,
                type: 'category',
                title: {
                    display: true,
                    text: 'Samples',
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                    maxRotation: 45,
                    minRotation: 45,
                    autoSkip: false,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                stacked: true,
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Relative abundance (%)',
                    padding: { top: 20 },
                },
                beginAtZero: false,
                min: 0,
                max: 100,
                grid: {
                    drawOnChartArea: true,
                },
            },
        },
    };

    const chartDataWithVisibility = chartData ? {
        ...chartData,
        datasets: chartData.datasets.map((dataset, index) => ({
            ...dataset,
            hidden: hiddenDatasets[index] || false,
        })),
    } : null;

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error fetching data: {error}</div>;
    }

    if (!showChart) {
        return (
            <div>
                 <Tooltip title="Loading the chart may take a few seconds due to the large amount of data.">
                <Button my={2} variant="outlined" gradientDuoTone="cyanToBlue" onClick={handleLoadChart}>
                    Load Chart
                </Button>
            </Tooltip>
            </div>
        );
    }

    return (
        <div>
            <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="h6" gutterBottom align="left">
                    {`Abundance of bacteria per sample`}
                </Typography>
            </Box>
            <FormControl variant="outlined" margin="normal">
                <InputLabel id="chart-type-label">Chart Type</InputLabel>
                <Select
                    labelId="chart-type-label"
                    value={chartType}
                    onChange={handleChartTypeChange}
                    label="Chart Type"
                >
                    <MenuItem value="line">Line Chart</MenuItem>
                    <MenuItem value="stackedBar">Bar Chart</MenuItem>
                </Select>
            </FormControl>
            <Tooltip title="Loading the chart may take a few seconds due to the large amount of data.">
                <Button my={2} variant="outlined" gradientDuoTone="cyanToBlue" onClick={handleLoadChart}>
                    Load Chart
                </Button>
            </Tooltip>
            <Button variant="outlined" gradientDuoTone="cyanToBlue" onClick={toggleNDGroupVisibility} sx={{ ml: 2, my: 2}}>
                {showNDGroup ? 'Hide' : 'Show'} (nd) group chart
            </Button>
            {/* Eliminamos el botón de 'Reload Chart' */}
            {chartDataWithVisibility && (
                <Box display="flex" flexDirection="row">
                    <Box sx={{ overflowX: 'auto', height: '600px', position: 'relative' }}>
                        <Box sx={{ height: '100%', width: `${chartData.labels.length * 20}px`, minWidth: '100%' }}>
                            {chartType === 'line' && (
                                <Line data={chartDataWithVisibility} options={commonOptions} />
                            )}
                            {chartType === 'stackedBar' && (
                                <Bar data={chartDataWithVisibility} options={commonOptions} />
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ minWidth: '300px' }}> {/* Ampliamos el ancho mínimo de la columna Legend */}
                        <List>
                            <ListItemButton onClick={handleListClick}>
                                <ListItemIcon>
                                    {listOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemIcon>
                                <ListItemText primary="Legend" />
                            </ListItemButton>
                            <Collapse in={listOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding sx={{ height: '300px', overflowY: 'auto' }}>
                                    {chartData.datasets.map((dataset, index) => (
                                        <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Checkbox
                                                checked={!hiddenDatasets[index]}
                                                onChange={() => toggleDatasetVisibility(index)}
                                            />
                                            <Box
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    backgroundColor: dataset.backgroundColor,
                                                    borderRadius: '50%',
                                                    marginRight: 1,
                                                }}
                                            />
                                            <ListItemText primary={dataset.label} />
                                        </ListItem>                                    
                                    ))}
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                </Box>
            )}
            {showNDGroup && (
                <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                    <Typography variant="h6">Abundance of (nd) group</Typography>
                    {chartDataWithVisibility && (
                        <Box sx={{ overflowX: 'auto', height: '600px', position: 'relative' }}>
                            <Box sx={{ height: '100%', width: `${chartData.labels.length * 20}px`, minWidth: '100%' }}>
                                {chartType === 'line' && (
                                    <Line data={{
                                        labels: chartData.labels,
                                        datasets: chartData.datasets.filter(dataset => dataset.label === '(nd) group')
                                    }} options={commonOptions} />
                                )}
                                {chartType === 'stackedBar' && (
                                    <Bar data={{
                                        labels: chartData.labels,
                                        datasets: chartData.datasets.filter(dataset => dataset.label === '(nd) group')
                                    }} options={commonOptions} />
                                )}
                            </Box>
                        </Box>
                    )}
                </Paper>
            )}
        </div>
    );
};

GlobalChart.propTypes = {
    selectedLevel: PropTypes.string.isRequired,
};

export default GlobalChart;
