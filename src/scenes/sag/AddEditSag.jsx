// src/pages/SAG/AddEditSAG.jsx

import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createSag, fetchSagById, updateSag } from '../../api/sagApi';

const AddEditSAG = () => {
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
      const fetchSag = async () => {
        const data = await fetchSagById(id);
        if (data) {
          setFormData(data);
        }
      };
      fetchSag();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateSag(id, formData);
    } else {
      await createSag(formData);
    }
    navigate('/sag');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit SAG' : 'Add SAG'}
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

export default AddEditSAG;
