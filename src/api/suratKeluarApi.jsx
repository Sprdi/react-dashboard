// src/api/suratMasukApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/surat_keluars'; // Replace with your actual API URL

export const fetchSuratKeluars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Surat Keluars:', error);
    return [];
  }
};

export const fetchSuratKeluarById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Surat Keluar by ID:', error);
    return null;
  }
};

export const createSuratKeluar = async (suratKeluar) => {
  try {
    const response = await axios.post(API_URL, suratKeluar);
    return response.data;
  } catch (error) {
    console.error('Failed to create Surat Keluar:', error);
  }
};

export const updateSuratKeluar = async (id, suratKeluar) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, suratKeluar);
    return response.data;
  } catch (error) {
    console.error('Failed to update Surat Keluar:', error);
  }
};

export const deleteSuratKeluar = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete Surat Keluar:', error);
  }
};
