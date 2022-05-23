import api from './api';

export async function sendOrder(data) {
  const response = await api.post('/orders', data);

  return response.data;
}
