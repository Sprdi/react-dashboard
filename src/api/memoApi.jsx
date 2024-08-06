// src/api/memoApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/memos'; // Replace with your actual API URL

export const fetchMemo = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Memo:', error);
    return [];
  }
};

export const fetchMemoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Memo by ID:', error);
    return null;
  }
};

export const createMemo = async (memo) => {
  try {
    const response = await axios.post(API_URL, memo);
    return response.data;
  } catch (error) {
    console.error('Failed to create Memo:', error);
  }
};

export const updateMemo = async (id, memo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, memo);
    return response.data;
  } catch (error) {
    console.error('Failed to update Memo:', error);
  }
};

export const deleteMemo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete Memo:', error);
  }
};
