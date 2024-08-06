// src/api/skApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/sks'; // Replace with your actual API URL

export const fetchSks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch SKs:', error);
    return [];
  }
};

export const fetchSkById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch SK by ID:', error);
    return null;
  }
};

export const createSk = async (sk) => {
  try {
    const response = await axios.post(API_URL, sk);
    return response.data;
  } catch (error) {
    console.error('Failed to create SK:', error);
  }
};

export const updateSk = async (id, sk) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, sk);
    return response.data;
  } catch (error) {
    console.error('Failed to update SK:', error);
  }
};

export const deleteSk = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete SK:', error);
  }
};
