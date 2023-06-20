import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_URL;

export const api = axios.create({
  baseURL: BASE_URL
});
