// src/pages/Project/ProjectList.jsx

import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { fetchProjects, deleteProject } from '../../api/projectApi';

const mockDataProjects = [
  {
    id: 1,
    no: "1",
    kodeProject: "0001/ITS-SAG/SOF/RBB/A/2024",
    jenisPengadaan: "New Product",
    namaPengadaan: "Pengadaan Penambahan Lisensi Network Access Control (NAC) dan Engineer on Site (EoS) Network Access Control (NAC)",
    divisiInisiasi: "Divisi IT Security",
    bulan: "Jan-24",
    sumberPendanaan: "1.1.2.1 Pengadaan Security Software",
    anggaran: "Rp. 29.250.000.000",
    noIzin: "10015/ITS-SAG/M/2024",
    tanggalIzin: "22-January-2024",
    tanggalTor: "23-January-2024",
    pic: "LUTHFI/ADNAN"
  }
];

const ProjectList = () => {
  const [projects, setProjects] = useState(mockDataProjects);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      if (Array.isArray(data)) {
        setProjects(data.map((item, index) => ({ ...item, id: item.id || index + 1 })));
      } else {
        console.error('Fetched data is not an array:', data);
      }
    };
    getProjects();
  }, []);

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjects(projects.filter((project) => project.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'no', headerName: 'No', flex: 1 },
    { field: 'kodeProject', headerName: 'Kode Project', flex: 1 },
    { field: 'jenisPengadaan', headerName: 'Jenis Pengadaan', flex: 1 },
    { field: 'namaPengadaan', headerName: 'Nama Pengadaan', flex: 1 },
    { field: 'divisiInisiasi', headerName: 'Divisi Inisiasi', flex: 1 },
    { field: 'bulan', headerName: 'Bulan', flex: 1 },
    { field: 'sumberPendanaan', headerName: 'Sumber Pendanaan', flex: 1 },
    { field: 'anggaran', headerName: 'Anggaran', flex: 1 },
    { field: 'noIzin', headerName: 'No Izin', flex: 1 },
    { field: 'tanggalIzin', headerName: 'Tanggal Izin', flex: 1 },
    { field: 'tanggalTor', headerName: 'Tanggal TOR', flex: 1 },
    { field: 'pic', headerName: 'PIC', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => navigate(`/project/edit/${params.row.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </>
      )
    }
  ];

  return (
    <Box m="20px">
      <Header title="Projects" />
      <Button variant="contained" color="primary" onClick={() => navigate('/project/add')}>
        Add Project
      </Button>
      <Box m="40px 0 0 0" height="75vh" sx={styles(colors)}>
        <DataGrid
          rows={projects}
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

export default ProjectList;
