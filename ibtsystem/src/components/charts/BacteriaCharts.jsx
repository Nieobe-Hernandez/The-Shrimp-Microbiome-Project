import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AxiosClient from '../../config/http-client/axios-client';
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Button } from 'flowbite-react';
import Grid from '@mui/material/Grid';
import '../../assets/css/styles.css';

const BacteriaCharts = ({ selectedBacteria }) => {
    const [averageByYear, setAverageByYear] = useState([]);
    const [averageByOrgan, setAverageByOrgan] = useState([]);
    const [averageByOrganAndYear, setAverageByOrganAndYear] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [expandedChart, setExpandedChart] = useState(null);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        if (selectedBacteria) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const encodedBacteria = encodeURIComponent(selectedBacteria);

                    // Fetching average by year
                    const responseYear = await AxiosClient.get(`/api/datos-taxonomicos/promedio/anio/${encodedBacteria}`);
                    const dataYear = responseYear.data.map(item => ({
                        label: item[0],
                        value: Number(item[1].toFixed(2)),  
                        color: getRandomColor(),
                    }));
                    setAverageByYear(dataYear);

                    // Fetching average by organ
                    const responseOrgan = await AxiosClient.get(`/api/datos-taxonomicos/promedio/organo/${encodedBacteria}`);
                    const dataOrgan = responseOrgan.data.map(item => ({
                        label: item[0] === 'H' ? 'Hepatopancreas' : 'Intestine',
                        value: Number(item[1].toFixed(2)),  
                        color: getRandomColor(),
                    }));
                    setAverageByOrgan(dataOrgan);

                    // Fetching average by organ and year
                    const responseOrganAndYear = await AxiosClient.get(`/api/datos-taxonomicos/promedio/organo-anio/${encodedBacteria}`);
                    const dataOrganAndYear = responseOrganAndYear.data.map(item => ({
                        organ: item[0] === 'H' ? 'Hepatopancreas' : 'Intestine',
                        year: item[1],
                        value: Number(item[2].toFixed(2)),  
                        color: getRandomColor(),
                    }));
                    setAverageByOrganAndYear(dataOrganAndYear);

                    setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [selectedBacteria]);

    const handleClickOpen = (chart) => {
        setExpandedChart(chart);
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

    const yearChartData = {
        labels: averageByYear.map(item => item.label),
        datasets: [
            {
                label: 'Yearly Average',
                data: averageByYear.map(item => item.value),
                borderColor: averageByYear.map(item => item.color),
                backgroundColor: averageByYear.map(item => item.color),
                fill: false,
            },
        ],
    };

    const organChartData = {
        labels: averageByOrgan.map(item => item.label),
        datasets: [
            {
                label: 'Average by Organ',
                data: averageByOrgan.map(item => item.value),
                backgroundColor: averageByOrgan.map(item => item.color),
            },
        ],
    };

    const organAndYearChartData = averageByOrganAndYear.reduce((acc, item) => {
        const { organ, year, value, color } = item;
        if (!acc[organ]) {
            acc[organ] = {
                labels: [],
                datasets: [{
                    label: `Average by year and organ: ${organ}`,
                    data: [],
                    borderColor: color,
                    backgroundColor: color,
                    fill: false,
                }]
            };
        }
        acc[organ].labels.push(year);
        acc[organ].datasets[0].data.push(value);
        return acc;
    }, {});

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5" gutterBottom>
                        Yearly Average for {selectedBacteria}
                    </Typography>
                    <Bar 
                        data={yearChartData}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Years',
                                    },
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Relative Abundance (%)',
                                    },
                                },
                            },
                            locale: 'en-US'
                        }}
                    />
                    <Button  outline gradientDuoTone="cyanToBlue" onClick={() => handleClickOpen('year')}>
                        Expand Graph
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" gutterBottom>
                        Average by Organ for {selectedBacteria}
                    </Typography>
                    <Bar 
                        data={organChartData}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Organs',
                                    },
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Relative Abundance (%)',
                                    },
                                },
                            },
                            locale: 'en-US'  
                        }}
                    />
                    <Button outline gradientDuoTone="cyanToBlue" onClick={() => handleClickOpen('organ')}>
                        Expand Graph
                    </Button>
                </Grid>
                {Object.keys(organAndYearChartData).map(organ => (
                    <Grid item xs={6} key={organ}>
                        <Typography variant="h5" gutterBottom>
                            Average by Year and Organ: {organ}
                        </Typography>
                        <Bar 
                            data={organAndYearChartData[organ]}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years',
                                        },
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Relative Abundance (%)',
                                        },
                                    },
                                },
                                locale: 'en-US'  
                            }}
                        />
                        <Button  outline gradientDuoTone="cyanToBlue" onClick={() => handleClickOpen(organ)}>
                            Expand Graph
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                <DialogTitle>Expanded Graph</DialogTitle>
                <DialogContent className='text-center items-center'>
                    {expandedChart === 'year' && (
                        <Bar 
                            data={yearChartData}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Years',
                                        },
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Relative Abundance (%)',
                                        },
                                    },
                                },
                                locale: 'en-US'  
                            }}
                        />
                    )}
                    {expandedChart === 'organ' && (
                        <Bar 
                            data={organChartData}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Organs',
                                        },
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Relative Abundance (%)',
                                        },
                                    },
                                },
                                locale: 'en-US'  
                            }}
                        />
                    )}
                    {Object.keys(organAndYearChartData).map(organ => (
                        expandedChart === organ && (
                            <Bar 
                                key={organ}
                                data={organAndYearChartData[organ]}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                    },
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Years',
                                            },
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Relative Abundance (%)',
                                            },
                                        },
                                    },
                                    locale: 'en-US'  
                                }}
                            />
                        )
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

BacteriaCharts.propTypes = {
    selectedBacteria: PropTypes.string,
};

export default BacteriaCharts;
