import axios from 'axios';

const baseURL = 'https://api.bitzen-pet.homologacao.bitzenwebsites.net';

const api = axios.create({
  baseURL,
});

export const setAuthToken = (token:string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const getAllPets = (searchText:string) => {
  return api.get(`/api/pets?search=${searchText}`);
};

export const salvaPets = (data: any) => {
  return api.post('/api/pets', data);
}

export const getInfoUser = () => {
  return api.get('api/user');
}

export default api;
