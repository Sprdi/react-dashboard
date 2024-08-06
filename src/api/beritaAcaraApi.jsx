// src/api/beritaAcaraApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/berita_acaras'; // Replace with your actual API URL

export const fetchBeritaAcara = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Berita Acara:', error);
    return [];
  }
};

export const fetchBeritaAcaraById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Berita Acara by ID:', error);
    return null;
  }
};

export const createBeritaAcara = async (beritaAcara) => {
  try {
    const response = await axios.post(API_URL, beritaAcara);
    return response.data;
  } catch (error) {
    console.error('Failed to create Berita Acara:', error);
  }
};

export const updateBeritaAcara = async (id, beritaAcara) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, beritaAcara);
    return response.data;
  } catch (error) {
    console.error('Failed to update Berita Acara:', error);
  }
};

export const deleteBeritaAcara = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete Berita Acara:', error);
  }
};
