import React, { useState, useEffect, useMemo } from 'react';
import AxiosClient from '../../config/http-client/axios-client';
import { CircularProgress, Autocomplete, TextField, Tooltip, Box, Button } from '@mui/material';
import CustomDataTable from '../CustomDataTable';
import PrevalenceTable from '../PrevalenceTable';

const BacteriaTablePhylum = ({ apiUrl, savedState, onStateChange }) => {
  const [data, setData] = useState(savedState.data);
  const [selectedValue, setSelectedValue] = useState(savedState.selectedBacteria);
  const [headers, setHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(!savedState.data.length);
  const [searchQuery, setSearchQuery] = useState(savedState.searchQuery);

  const exportToText = () => {
    const filteredData = selectedValue
      ? data.filter(row => row.nombre === selectedValue.label)
      : data;

    if (filteredData.length === 0) {
      alert("No hay datos disponibles para exportar para la bacteria seleccionada.");
      return;
    }

    const headers = Object.keys(filteredData[0]).join("\t");
    const rows = filteredData.map(row => Object.values(row).join("\t")).join("\n");
    const text = `${headers}\n${rows}`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedValue ? selectedValue.label : "bacteria"}_data.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    const filteredData = selectedValue
      ? data.filter(row => row.nombre === selectedValue.label)
      : data;

    if (filteredData.length === 0) {
      alert("No hay datos disponibles para exportar para la bacteria seleccionada.");
      return;
    }

    const headers = Object.keys(filteredData[0]).join(",");
    const rows = filteredData.map(row => Object.values(row).join(",")).join("\n");
    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedValue ? selectedValue.label : "bacteria"}_data.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (!savedState.data.length) {
      fetchData(0, 8680, savedState.searchQuery);
    } else {
      processData(savedState.data);
    }
  }, [apiUrl, savedState]);

  const fetchData = async (page, size, query) => {
    setLoading(true);
    try {
      const response = await AxiosClient.get(`${apiUrl}?page=${page}&size=${size}&searchTerm=${query}`);
      const fetchedData = response.data.content || response.data;
      setData(fetchedData);
      onStateChange({ ...savedState, data: fetchedData });
      processData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const processData = (fetchedData) => {
    const uniqueNames = [...new Set(fetchedData.map(item => item.nombre))];
    const muestras = [...new Set(fetchedData.map(item => item.muestra))];

    const organizedData = {};
    uniqueNames.forEach(name => {
      if (!organizedData[name]) {
        organizedData[name] = {};
      }
      muestras.forEach(muestra => {
        organizedData[name][muestra] = null;
      });
    });

    fetchedData.forEach(item => {
      if (!organizedData[item.nombre]) {
        organizedData[item.nombre] = {};
      }
      organizedData[item.nombre][item.muestra] = item.valor;
    });

    const tableRows = uniqueNames.map((name, index) => {
      const row = { nombre: name, id: `${name}-${index}` };
      muestras.forEach(muestra => {
        row[muestra] = organizedData[name][muestra];
      });
      return row;
    });

    setHeaders(muestras);
    setTableData(tableRows);
  };

  const handleSearchChange = (event, value) => {
    setSelectedValue(value);
    setSearchQuery(value ? value.label : '');
    onStateChange({ ...savedState, searchQuery: value ? value.label : '', selectedBacteria: value ? value.label : null });
  };

  const filteredTableData = useMemo(() => {
    return selectedValue ? tableData.filter(row => row.nombre === selectedValue.label) : tableData;
  }, [selectedValue, tableData]);

  if (loading) {
    return <CircularProgress />;
  }

  const columns = [
    {
      name: 'Name',
      selector: row => row.nombre,
      sortable: true,
      cell: row => (
        <Tooltip title={row.nombre}>
          <span>{row.nombre ? (row.nombre.length > 30 ? `${row.nombre.slice(0, 30)}...` : row.nombre) : ''}</span>
        </Tooltip>
      )
    },
    ...headers.map(header => ({
      name: header,
      selector: row => row[header],
      sortable: true
    }))
  ];

  const uniqueOptions = Array.from(new Set(data.map(item => item.nombre))).map(nombre => ({
    label: nombre,
    value: nombre
  }));

  return (
    <>
      <Autocomplete
        options={uniqueOptions}
        getOptionLabel={(option) => option.label}
        value={selectedValue}
        onChange={handleSearchChange}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => <TextField {...params} label="Search by Phylum" />}
        style={{ width: '100%', marginBottom: '20px' }}
      />
      <div className="text-lg text-gray-600 mb-4">
        Percentage of bacteria abundance in each sample
      </div>
      <CustomDataTable
        columns={columns}
        data={filteredTableData}
        progressPending={loading}
      />
       <Box >
          <Button
            className="export-button rounded-button"
            variant="outlined"
            color="primary"
            hovercolor="primary"
            onClick={() => exportToText(data)}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            Export to Text
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            hovercolor="secondary"
            onClick={() => exportToCSV(data)}
          >
            Export to CSV
          </Button>
        </Box>
      <PrevalenceTable selectedBacteria={selectedValue ? selectedValue.label : ''} nivel="Phylum" />
    </>
  );
};

export default BacteriaTablePhylum;
