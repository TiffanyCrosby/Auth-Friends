import axios from 'axios';

const token = localStorage.getItem('token');

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: 'http://localhost:5000',
  });
};
