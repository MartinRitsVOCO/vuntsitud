import axios from 'axios';
import { API_BASE_URL } from '../utils/api';

const apiService = {
  get: async (endpoint) => {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  },

  post: async (endpoint, data) => {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  },

  put: async (endpoint, data) => {
    const response = await axios.put(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  },

  delete: async (endpoint) => {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`);
    return response.data;
  }
};

export default apiService;