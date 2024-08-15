import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AxiosClient from '../../config/http-client/axios-client';
import { Bar, Line } from 'react-chartjs-2';
import { CircularProgress, Typography, FormControl, InputLabel, Select, MenuItem, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import 'chart.js/auto';
import { Button } from "flowbite-react";

const IndividualChart = ({ selectedBacteria, selectedLevel }) => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chartType, setChartType] = useState('stackedBar');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await AxiosClient.get(`/api/datos-taxonomicos/nivel/${selectedLevel}/bacteria/${encodeURIComponent(selectedBacteria)}/grafica`);
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
                    acc[item.muestra][item.nombre] = item.valor;
                    return acc;
                }, {});

                const labels = Object.keys(groupedData);
                const bacteriaNames = [...new Set(data.map(item => item.nombre))].sort();

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
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, [selectedBacteria, selectedLevel]);

    const getColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
    if (!selectedBacteria) {
        return null; 
    }

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error fetching data: {error}</div>;
    }
    

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

    return (
        <div>
            <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="h6" gutterBottom align="left">
                    {`Abundance of ${selectedBacteria} per sample`}
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
            <Button variant="outlined" gradientDuoTone="cyanToBlue" onClick={handleClickOpen}>
                Expand Graph
            </Button>
            <Box display="flex" flexDirection="row">
                <Box sx={{ overflowX: 'auto', height: '600px', position: 'relative' }}>
                    <Box sx={{ height: '100%', width: `${chartData.labels.length * 20}px`, minWidth: '100%' }}>
                        {chartData && chartType === 'line' && (
                            <Line data={chartData} options={commonOptions} />
                        )}
                        {chartData && chartType === 'stackedBar' && (
                            <Bar data={chartData} options={commonOptions} />
                        )}
                    </Box>
                </Box>
            </Box>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
                <DialogTitle>Hover over any color section to observe the specific name and abundance </DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="row">
                        <Box sx={{ overflowX: 'auto', height: '80vh', position: 'relative', flex: 1 }}>
                            <Box sx={{ height: '100%', width: `${chartData.labels.length * 20}px`, minWidth: '100%' }}>
                                {chartData && chartType === 'line' && (
                                    <Line data={chartData} options={commonOptions} />
                                )}
                                {chartData && chartType === 'stackedBar' && (
                                    <Bar data={chartData} options={commonOptions} />
                                )}
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

IndividualChart.propTypes = {
    selectedBacteria: PropTypes.string.isRequired,
    selectedLevel: PropTypes.string.isRequired,
};

export default IndividualChart;
