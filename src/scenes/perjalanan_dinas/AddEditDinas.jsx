import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createPerjalananDinas, fetchPerjalananDinasById, updatePerjalananDinas } from '../../api/perjalananDinasApi';

const AddEditDinas = () => {
  const [formData, setFormData] = useState({
    noPerdin: '',
    tanggalPengajuan: '',
    deskripsi: ''
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchPerjalananDinas = async () => {
        const data = await fetchPerjalananDinasById(id);
        if (data) {
          setFormData(data);
        }
      };
      fetchPerjalananDinas();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updatePerjalananDinas(id, formData);
    } else {
      await createPerjalananDinas(formData);
    }
    navigate('/perjalanan_dinas');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit Perjalanan Dinas' : 'Add Perjalanan Dinas'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="noPerdin"
          label="No Perdin"
          value={formData.noPerdin}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="tanggalPengajuan"
          label="Tanggal Pengajuan"
          value={formData.tanggalPengajuan}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="deskripsi"
          label="Deskripsi"
          value={formData.deskripsi}
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

export default AddEditDinas;
