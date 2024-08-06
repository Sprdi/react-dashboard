// src/pages/Memo/MemoList.jsx

import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import { fetchMemo, deleteMemo } from '../../api/memoApi';

const mockDataMemo = [
  {
    id: 1,
    tanggal: "8-Jan-24",
    noMemo: "00002-ITS-SAG-M-2024",
    perihal: "Permohonan reimburse asuransi pak roy",
    pic: "wina",
  }
];

const MemoList = () => {
  const [memo, setMemo] = useState(mockDataMemo);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    const getMemo = async () => {
      const data = await fetchMemo();
      if (Array.isArray(data)) {
        setMemo(data.map((item, index) => ({ ...item, id: item.id || index + 1 })));
      } else {
        console.error('Fetched data is not an array:', data);
      }
    };
    getMemo();
  }, []);

  const handleDelete = async (id) => {
    await deleteMemo(id);
    setMemo(memo.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.2 },
    { field: 'tanggal', headerName: 'Tanggal', flex: 0.4 },
    { field: 'noMemo', headerName: 'No Memo', flex: 0.7 },
    { field: 'perihal', headerName: 'Perihal', flex: 1.8 },
    { field: 'pic', headerName: 'PIC', flex: 0.6 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 0.8,
      renderCell: (params) => (
        <>
          <Button onClick={() => navigate(`/memo/edit/${params.row.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </>
      )
    }
  ];

  return (
    <Box m="20px">
      <Header title="Memo" />
      <Button variant="contained" color="primary" onClick={() => navigate('/memo/add')}>
        Add Memo
      </Button>
      <Box m="40px 0 0 0" height="75vh" sx={styles(colors)}>
        <DataGrid
          rows={memo}
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

export default MemoList;
