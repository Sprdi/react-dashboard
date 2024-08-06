import axios from 'axios';

const API_URL = 'http://localhost:5173/perjalanan_dinas'; // Replace with your actual API URL

export const fetchPerjalananDinas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Perjalanan Dinas:', error);
    return [];
  }
};

export const fetchPerjalananDinasById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Perjalanan Dinas by ID:', error);
    return null;
  }
};

export const createPerjalananDinas = async (perjalananDinas) => {
  try {
    const response = await axios.post(API_URL, perjalananDinas);
    return response.data;
  } catch (error) {
    console.error('Failed to create Perjalanan Dinas:', error);
  }
};

export const updatePerjalananDinas = async (id, perjalananDinas) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, perjalananDinas);
    return response.data;
  } catch (error) {
    console.error('Failed to update Perjalanan Dinas:', error);
  }
};

export const deletePerjalananDinas = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete Perjalanan Dinas:', error);
  }
};
