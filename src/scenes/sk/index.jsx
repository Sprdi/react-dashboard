import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { fetchSks, deleteSk } from '../../api/skApi';

const mockDataSk = [
  {
    id: 1,
    tanggal: "8-Jan-24",
    noSurat: "00002-ITS-SAG-M-2024",
    perihal: "Permohonan reimburse asuransi pak roy",
    pic: "wina",
  }
];

const SK = () => {
  const [sks, setSks] = useState(mockDataSk);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    const getSks = async () => {
      const data = await fetchSks();
      if (Array.isArray(data)) {
        setSks(data.map((item, index) => ({ ...item, id: item.id || index + 1 })));
      } else {
        console.error('Fetched data is not an array:', data);
      }
    };
    getSks();
  }, []);

  const handleDelete = async (id) => {
    await deleteSk(id);
    setSks(sks.filter((sk) => sk.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.2 },
    { field: 'tanggal', headerName: 'Tanggal', flex: 0.4 },
    { field: 'noSurat', headerName: 'No Surat', flex: 0.7 },
    { field: 'perihal', headerName: 'Perihal', flex: 1.8 },
    { field: 'pic', headerName: 'PIC', flex: 0.6 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 0.8,
      renderCell: (params) => (
        <>
          <Button onClick={() => navigate(`/sk/edit/${params.row.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </>
      )
    }
  ];

  return (
    <Box m="20px">
      <Header title="SK" />
      <Button variant="contained" color="primary" onClick={() => navigate('/sk/add')}>
        Add SK
      </Button>
      <Box m="40px 0 0 0" height="75vh" sx={styles(colors)}>
        <DataGrid
          rows={sks}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.id}
        />
      </Box>
    </Box>
  );
};

const styles = (colors) => ({
  '& .MuiDataGrid-root': {
    border: 'none',
  },
  '& .MuiDataGrid-cell': {
    borderBottom: 'none',
  },
  '& .name-column--cell': {
    color: colors.greenAccent[300],
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: colors.blueAccent[700],
    borderBottom: 'none',
  },
  '& .MuiDataGrid-virtualScroller': {
    backgroundColor: colors.primary[400],
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: 'none',
    backgroundColor: colors.blueAccent[700],
  },
  '& .MuiCheckbox-root': {
    color: `${colors.greenAccent[200]} !important`,
  },
  '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
    color: `${colors.grey[100]} !important`,
  },
});

export default SK;
