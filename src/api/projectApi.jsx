// src/api/projectApi.js

import axios from 'axios';

const API_URL = 'http://localhost:5173/projects'; // Replace with your actual API URL

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch project by ID:', error);
    return null;
  }
};

export const createProject = async (project) => {
  try {
    const response = await axios.post(API_URL, project);
    return response.data;
  } catch (error) {
    console.error('Failed to create project:', error);
  }
};

export const updateProject = async (id, project) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, project);
    return response.data;
  } catch (error) {
    console.error('Failed to update project:', error);
  }
};

export const deleteProject = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Failed to delete project:', error);
  }
};
