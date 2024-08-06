import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { fetchPerjalananDinas, deletePerjalananDinas } from '../../api/perjalananDinasApi';
import Header from '../../components/Header';

const mockDataPerjalananDinas = [
  {
    id: 1,
    noPerdin: 'PD-001',
    tanggalPengajuan: '2024-06-03',
    deskripsi: 'Meeting with client'
  }
];

const PerjalananDinas = () => {
  const [perjalananDinas, setPerjalananDinas] = useState(mockDataPerjalananDinas);
  const navigate = useNavigate();

  useEffect(() => {
    const getPerjalananDinas = async () => {
      const data = await fetchPerjalananDinas();
      if (Array.isArray(data)) {
        setPerjalananDinas(data.map((item, index) => ({ ...item, id: item.id || index + 1 })));
      } else {
        console.error('Fetched data is not an array:', data);
      }
    };
    getPerjalananDinas();
  }, []);

  const handleDelete = async (id) => {
    await deletePerjalananDinas(id);
    setPerjalananDinas(perjalananDinas.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'noPerdin', headerName: 'No Perdin', flex: 1 },
    { field: 'tanggalPengajuan', headerName: 'Tanggal Pengajuan', flex: 1 },
    { field: 'deskripsi', headerName: 'Deskripsi', flex: 2 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => navigate(`/perjalanan_dinas/edit/${params.row.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </>
      )
    }
  ];

  return (
    <Box m="20px">
      <Header title="PERJALANAN DINAS" />
      <Button variant="contained" color="primary" onClick={() => navigate('/perjalanan_dinas/add')}>
        Add Perjalanan Dinas
      </Button>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={perjalananDinas}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.id}
        />
      </Box>
    </Box>
  );
};

export default PerjalananDinas;
