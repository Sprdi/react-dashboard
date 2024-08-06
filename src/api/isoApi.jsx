// src/api/isoApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/isos'; // Replace with your actual API URL

export const fetchIsos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch ISOs:', error);
    return [];
  }
};

export const fetchIsoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch ISO by ID:', error);
    return null;
  }
};

export const createIso = async (iso) => {
  try {
    const response = await axios.post(API_URL, iso);
    return response.data;
  } catch (error) {
    console.error('Failed to create ISO:', error);
  }
};

export const updateIso = async (id, iso) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, iso);
    return response.data;
  } catch (error) {
    console.error('Failed to update ISO:', error);
  }
};

export const deleteIso = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete ISO:', error);
  }
};
