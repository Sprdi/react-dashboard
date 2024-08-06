// src/pages/SuratMasuk/AddEditSuratMasuk.jsx

import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createSuratMasuk, fetchSuratMasukById, updateSuratMasuk } from '../../api/suratMasukApi';

const AddEditSuratMasuk = () => {
  const [formData, setFormData] = useState({
    noSurat: '',
    title: '',
    divisi: '',
    destiny: '',
    dateIssue: '',
    hard: '',
    soft: ''
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchSuratMasuk = async () => {
        const data = await fetchSuratMasukById(id);
        if (data) {
          setFormData(data);
        }
      };
      fetchSuratMasuk();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateSuratMasuk(id, formData);
    } else {
      await createSuratMasuk(formData);
    }
    navigate('/surat_masuk');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit Surat Masuk' : 'Add Surat Masuk'}
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
          name="divisi"
          label="Divisi"
          value={formData.divisi}
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
          name="dateIssue"
          label="Date Issue"
          value={formData.dateIssue}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="hard"
          label="Hard"
          value={formData.hard}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="soft"
          label="Soft"
          value={formData.soft}
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

export default AddEditSuratMasuk;
