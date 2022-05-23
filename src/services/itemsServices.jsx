import api from './api';

export async function listAll() {
  const response = await api.get('/items');

  return response.data;
}

export async function listOne(id) {
  const response = await api.get(`/items/${id}`);

  return response.data;
}
