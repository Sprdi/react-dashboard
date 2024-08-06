import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { fetchSuratKeluars, deleteSuratKeluar } from '../../api/suratKeluarApi';

export const mockDataSuratKeluar = [
  {
    id: 1,
    noSurat: "0168/LEP-PKS/2024",
    title: "Pengadaan Management Firewall Paloalto Panorama DC 2",
    from: "IT Security",
    destiny: "Div Operasi",
    PIC: "Dadang",
    dateIssue: "3 June 2024",
  }
];

const SuratKeluar = () => {
  const [suratKeluars, setSuratKeluars] = useState(mockDataSuratKeluar);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    const getSuratKeluars = async () => {
      const data = await fetchSuratKeluars();
      if (Array.isArray(data)) {
        setSuratKeluars(data.map((item, index) => ({ ...item, id: item.id || index + 1 })));
      } else {
        console.error('Fetched data is not an array:', data);
      }
    };
    getSuratKeluars();
  }, []);

  const handleDelete = async (id) => {
    await deleteSuratKeluar(id);
    setSuratKeluars(suratKeluars.filter((surat) => surat.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'noSurat', headerName: 'No Surat', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 2 },
    { field: 'from', headerName: 'from', flex: 1 },
    { field: 'destiny', headerName: 'Destiny', flex: 1 },
    { field: 'dateIssue', headerName: 'Date Issue', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => navigate(`/surat_keluar/edit/${params.row.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </>
      )
    }
  ];

  return (
    <Box m="20px">
      <Header title="SURAT MASUK" />
      <Button variant="contained" color="primary" onClick={() => navigate('/surat_keluar/add')}>
        Add Surat Keluar
      </Button>
      <Box m="40px 0 0 0" height="75vh" sx={styles(colors)}>
        <DataGrid
          rows={suratKeluars}
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

export default SuratKeluar;
