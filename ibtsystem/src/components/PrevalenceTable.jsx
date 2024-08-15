import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AxiosClient from '../config/http-client/axios-client';
import { 
  CircularProgress, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Typography, Collapse, IconButton 
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const PrevalenceTable = ({ selectedBacteria, nivel }) => {
    const [prevalenceData, setPrevalenceData] = useState({
        generalData: [],
        organData: [],
        yearOrganData: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedBacteria && nivel) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const generalResponse = await AxiosClient.get(`/api/datos-taxonomicos/prevalencia/${encodeURIComponent(selectedBacteria)}?nivel=${encodeURIComponent(nivel)}`);
                    const organResponse = await AxiosClient.get(`/api/datos-taxonomicos/prevalencia/organo/${encodeURIComponent(selectedBacteria)}?nivel=${encodeURIComponent(nivel)}`);
                    const yearOrganResponse = await AxiosClient.get(`/api/datos-taxonomicos/prevalencia/organo-anio/${encodeURIComponent(selectedBacteria)}?nivel=${encodeURIComponent(nivel)}`);

                    const totalSamples = 155; // Número total de muestras
                    const Hsamples = 74; // Número total de muestras de Hepatopancreas 
                    const Isamples = 81; // Número total de muestras de Intestino

                    const generalData = generalResponse.data.map(item => ({
                        organo: 'General',
                        nivel: item[0],
                        nombre: item[1],
                        prevalencia: (item[2] / totalSamples) * 100,
                        muestras: item[2]
                    }));

                    const organData = organResponse.data.map(item => {
                        const organo = item[0] === 'H' ? 'Hepatopancreas' : item[0] === 'I' ? 'Intestine' : item[0];
                        const organTotalSamples = organo === 'Hepatopancreas' ? Hsamples : organo === 'Intestine' ? Isamples : totalSamples;
                        return {
                            organo,
                            nivel: item[1],
                            nombre: item[2],
                            prevalencia: (item[3] / organTotalSamples) * 100,
                            muestras: item[3]
                        };
                    });

                    const yearOrganData = yearOrganResponse.data.map(item => {
                        const organo = item[0] === 'H' ? 'Hepatopancreas' : item[0] === 'I' ? 'Intestine' : item[0];
                        const organTotalSamples = organo === 'Hepatopancreas' ? Hsamples : organo === 'Intestine' ? Isamples : totalSamples;
                        return {
                            organo,
                            anio: item[1],
                            prevalencia: (item[2] / organTotalSamples) * 100,
                            muestras: item[2]
                        };
                    });

                    setPrevalenceData({ generalData, organData, yearOrganData });
                    setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [selectedBacteria, nivel]);

    const Row = ({ item }) => {
        const [open, setOpen] = useState(false);
        const yearData = prevalenceData.yearOrganData.filter(d => d.organo === item.organo);
        
        return (
            <>
                <TableRow>
                    <TableCell>
                        <IconButton size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </IconButton>
                    </TableCell>
                    <TableCell>{item.organo}</TableCell>
                    <TableCell>{item.nivel || 'N/A'}</TableCell>
                    <TableCell>{item.nombre || 'N/A'}</TableCell>
                    <TableCell align="right">{item.prevalencia.toFixed(2)}%</TableCell>
                    <TableCell align="right">{item.organo === 'Hepatopancreas' ? `${item.muestras}/74` : item.organo === 'Intestine' ? `${item.muestras}/81` : `${item.muestras}/155`}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Year</TableCell>
                                        <TableCell align="right">Prevalence</TableCell>
                                        <TableCell align="right">Samples</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {yearData.map((yearItem, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{yearItem.anio}</TableCell>
                                            <TableCell align="right">{yearItem.prevalencia.toFixed(2)}%</TableCell>
                                            <TableCell align="right">{yearItem.organo === 'Hepatopancreas' ? `${yearItem.muestras}/74` : yearItem.organo === 'Intestine' ? `${yearItem.muestras}/81` : `${yearItem.muestras}/155`}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        );
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

    if (prevalenceData.generalData.length === 0 && prevalenceData.organData.length === 0 && prevalenceData.yearOrganData.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" gutterBottom component="div">
                Prevalence Data
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Organ</TableCell>
                        <TableCell>Level</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Prevalence</TableCell>
                        <TableCell align="right">Samples</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prevalenceData.generalData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell />
                            <TableCell>General</TableCell>
                            <TableCell>{item.nivel || 'N/A'}</TableCell>
                            <TableCell>{item.nombre || 'N/A'}</TableCell>
                            <TableCell align="right">{item.prevalencia.toFixed(2)}%</TableCell>
                            <TableCell align="right">{item.muestras}/155</TableCell>
                        </TableRow>
                    ))}
                    {prevalenceData.organData.map((item, index) => (
                        <Row key={index} item={item} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

PrevalenceTable.propTypes = {
    selectedBacteria: PropTypes.string.isRequired,
    nivel: PropTypes.string.isRequired,
};

export default PrevalenceTable;
