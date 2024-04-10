import axios from 'axios';

const BASE_URL = 'http://api.aladhan.com/v1'; // Replace with your API base URL

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Adjust timeout as needed
});

export const fetchPrayTimes = async (location, date) => {
  try {
    const response = await service.get(`/timingsByAddress?address=${location}&date=${date}&school=1`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};