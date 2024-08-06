// src/api/suratMasukApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/surat_masuks'; // Replace with your actual API URL

export const fetchSuratMasuks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Surat Masuks:', error);
    return [];
  }
};

export const fetchSuratMasukById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Surat Masuk by ID:', error);
    return null;
  }
};

export const createSuratMasuk = async (suratMasuk) => {
  try {
    const response = await axios.post(API_URL, suratMasuk);
    return response.data;
  } catch (error) {
    console.error('Failed to create Surat Masuk:', error);
  }
};

export const updateSuratMasuk = async (id, suratMasuk) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, suratMasuk);
    return response.data;
  } catch (error) {
    console.error('Failed to update Surat Masuk:', error);
  }
};

export const deleteSuratMasuk = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete Surat Masuk:', error);
  }
};
