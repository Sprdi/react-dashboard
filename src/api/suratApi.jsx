// src/api/suratApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/surats'; // Replace with your actual API URL

export const fetchSurat = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Surat:', error);
    return [];
  }
};

export const fetchSuratById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Surat by ID:', error);
    return null;
  }
};

export const createSurat = async (surat) => {
  try {
    const response = await axios.post(API_URL, surat);
    return response.data;
  } catch (error) {
    console.error('Failed to create Surat:', error);
  }
};

export const updateSurat = async (id, surat) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, surat);
    return response.data;
  } catch (error) {
    console.error('Failed to update Surat:', error);
  }
};

export const deleteSurat = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete Surat:', error);
  }
};
