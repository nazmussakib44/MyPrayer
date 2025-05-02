import axios from 'axios';

const BASE_URL = 'http://api.aladhan.com/v1'; 

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const fetchPrayTimes = async (location, date, school = 1, method = null) => {
  console.log(location);
  console.log(date);

  try {
    const response = await service.get(`/timingsByAddress?address=${location}&date=${date}&school=${school}&method=${method}`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};