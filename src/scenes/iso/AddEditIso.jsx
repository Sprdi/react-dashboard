// src/pages/ISO/AddEditISO.jsx

import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createIso, fetchIsoById, updateIso } from '../../api/isoApi';

const AddEditISO = () => {
  const [formData, setFormData] = useState({
    tanggal: '',
    noMemo: '',
    perihal: '',
    pic: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchIso = async () => {
        const data = await fetchIsoById(id);
        if (data) {
          setFormData(data);
        }
      };
      fetchIso();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateIso(id, formData);
    } else {
      await createIso(formData);
    }
    navigate('/iso');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit ISO' : 'Add ISO'}
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
          name="noMemo"
          label="No Memo"
          value={formData.noMemo}
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

export default AddEditISO;
