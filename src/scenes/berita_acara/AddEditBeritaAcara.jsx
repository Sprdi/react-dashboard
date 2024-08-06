// src/pages/BeritaAcara/AddEditBeritaAcara.jsx

import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createBeritaAcara, fetchBeritaAcaraById, updateBeritaAcara } from '../../api/beritaAcaraApi';

const AddEditBeritaAcara = () => {
  const [formData, setFormData] = useState({
    tanggal: '',
    noSurat: '',
    perihal: '',
    pic: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchBeritaAcara = async () => {
        const data = await fetchBeritaAcaraById(id);
        if (data) {
          setFormData(data);
        }
      };
      fetchBeritaAcara();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateBeritaAcara(id, formData);
    } else {
      await createBeritaAcara(formData);
    }
    navigate('/berita_acara');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit Berita Acara' : 'Add Berita Acara'}
      </Typography>
      <form onSubmit={handleSubmit}>
      <TextField
          name="tanggal"
          label="Tanggal"
          value={formData.tanggal}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="noSurat"
          label="No Surat"
          value={formData.noSurat}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="perihal"
          label="Perihal"
          value={formData.perihal}
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
        <Button type="submit" variant="contained" color="primary">
          {isEditMode ? 'Update' : 'Add'}
        </Button>
      </form>
    </Box>
  );
};

export default AddEditBeritaAcara;
