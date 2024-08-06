import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { fetchSuratMasuks, deleteSuratMasuk } from '../../api/suratMasukApi';

export const mockDataSuratMasuk = [
  {
    id: 1,
    noSurat: "0168/LEP-PKS/2024",
    title: "Pengadaan Management Firewall Paloalto Panorama DC 2",
    divisi: "IT Security",
    destiny: "Divisi Umum",
    dateIssue: "3 June 2024",
    hard: " ",
    soft: " ",
  }
];

const SuratMasuk = () => {
  const [suratMasuks, setSuratMasuks] = useState(mockDataSuratMasuk);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    const getSuratMasuks = async () => {
      const data = await fetchSuratMasuks();
      if (Array.isArray(data)) {
        setSuratMasuks(data.map((item, index) => ({ ...item, id: item.id || index + 1 })));
      } else {
        console.error('Fetched data is not an array:', data);
      }
    };
    getSuratMasuks();
  }, []);

  const handleDelete = async (id) => {
    await deleteSuratMasuk(id);
    setSuratMasuks(suratMasuks.filter((surat) => surat.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'noSurat', headerName: 'No Surat', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 2 },
    { field: 'divisi', headerName: 'Divisi', flex: 1 },
    { field: 'destiny', headerName: 'Destiny', flex: 1 },
    { field: 'dateIssue', headerName: 'Date Issue', flex: 1 },
    { field: 'hard', headerName: 'Hard', flex: 1 },
    { field: 'soft', headerName: 'Soft', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => navigate(`/surat_masuk/edit/${params.row.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </>
      )
    }
  ];

  return (
    <Box m="20px">
      <Header title="SURAT MASUK" />
      <Button variant="contained" color="primary" onClick={() => navigate('/surat_masuk/add')}>
        Add Surat Masuk
      </Button>
      <Box m="40px 0 0 0" height="75vh" sx={styles(colors)}>
        <DataGrid
          rows={suratMasuks}
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

export default SuratMasuk;
