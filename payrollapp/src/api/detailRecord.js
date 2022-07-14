import apiClient from './client';

const getAll = async () => {
  try {
    const response = await apiClient.get('/detailrecord');
  } catch (error) {}
};
