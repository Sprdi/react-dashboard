// src/pages/SuratMasuk/AddEditSuratMasuk.jsx

import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createSuratKeluar, fetchSuratKeluarById, updateSuratKeluar } from '../../api/suratKeluarApi';

const AddEditSuratKeluar = () => {
  const [formData, setFormData] = useState({
    noSurat: '',
    title: '',
    from: '',
    destiny: '',
    pic: '',
    dateIssue: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchSuratKeluar = async () => {
        const data = await fetchSuratKeluarById(id);
        if (data) {
          setFormData(data);
        }
      };
      fetchSuratKeluar();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateSuratKeluar(id, formData);
    } else {
      await createSuratKeluar(formData);
    }
    navigate('/surat_keluar');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit Surat Keluar' : 'Add Surat Keluar'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="noSurat"
          label="No Surat"
          value={formData.noSurat}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="from"
          label="From"
          value={formData.from}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="destiny"
          label="Destiny"
          value={formData.destiny}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="pic"
          label="PIC"
          value={formData.pic}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="dateIssue"
          label="Date Issue"
          value={formData.dateIssue}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {isEditMode ? 'Update' : 'Add'}
        </Button>
      </form>
    </Box>
  );
};

export default AddEditSuratKeluar;
