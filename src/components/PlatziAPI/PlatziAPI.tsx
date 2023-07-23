import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
const API_BASE_URL = 'https://api.escuelajs.co/api/v1/'; // Reemplaza con la URL de tu API

export const useDeleteData = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (url: string) => axios.delete(`${API_BASE_URL+url}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products'); // Invalida la caché para actualizar los datos
      },
    }
  );
};

export const useCreateData = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newData: { name: string; image: string }) => axios.post(`${API_BASE_URL}categories/`, newData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories'); // Invalida la caché para actualizar los datos
       
      },
    }
  );
};

const PlatziAPI = async (url: string, id: number = null) => {
  if (id !== null) {
    const response = await fetch(`${API_BASE_URL + url}/${id}`);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(`https://api.escuelajs.co/api/v1/${url}`);
    const data = await response.json();
    return data;
  }
}
export default PlatziAPI