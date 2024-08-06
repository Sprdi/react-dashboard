// src/api/sagApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/sags'; // Replace with your actual API URL

export const fetchSags = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch SAGs:', error);
    return [];
  }
};

export const fetchSagById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch SAG by ID:', error);
    return null;
  }
};

export const createSag = async (sag) => {
  try {
    const response = await axios.post(API_URL, sag);
    return response.data;
  } catch (error) {
    console.error('Failed to create SAG:', error);
  }
};

export const updateSag = async (id, sag) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, sag);
    return response.data;
  } catch (error) {
    console.error('Failed to update SAG:', error);
  }
};

export const deleteSag = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete SAG:', error);
  }
};
