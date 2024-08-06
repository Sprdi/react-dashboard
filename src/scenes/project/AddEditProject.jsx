// src/pages/Project/AddEditProject.jsx

import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { createProject, fetchProjectById, updateProject } from '../../api/projectApi';

const AddEditProject = () => {
  const [formData, setFormData] = useState({
    id: '',
    no: '',
    kodeProject: '',
    jenisPengadaan: '',
    namaPengadaan: '',
    divisiInisiasi: '',
    bulan: '',
    sumberPendanaan: '',
    anggaran: '',
    noIzin: '',
    tanggalIzin: '',
    tanggalTor: '',
    pic: ''
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchProject = async () => {
        const data = await fetchProjectById(id);
        if (data) {
          setFormData(data);
        }
      };
      fetchProject();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateProject(id, formData);
    } else {
      await createProject(formData);
    }
    navigate('/project');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        {isEditMode ? 'Edit Project' : 'Add Project'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="id"
          label="ID"
          value={formData.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="no"
          label="No"
          value={formData.no}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="kodeProject"
          label="Kode Project"
          value={formData.kodeProject}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="jenisPengadaan"
          label="Jenis Pengadaan"
          value={formData.jenisPengadaan}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="namaPengadaan"
          label="Nama Pengadaan"
          value={formData.namaPengadaan}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="divisiInisiasi"
          label="Divisi Inisiasi"
          value={formData.divisiInisiasi}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="bulan"
          label="Bulan"
          value={formData.bulan}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="sumberPendanaan"
          label="Sumber Pendanaan"
          value={formData.sumberPendanaan}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="anggaran"
          label="Anggaran"
          value={formData.anggaran}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="noIzin"
          label="No Izin"
          value={formData.noIzin}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="tanggalIzin"
          label="Tanggal Izin"
          value={formData.tanggalIzin}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="tanggalTor"
          label="Tanggal Tor"
          value={formData.tanggalTor}
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

export default AddEditProject;
