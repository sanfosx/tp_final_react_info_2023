
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
const API_BASE_URL = 'https://api.escuelajs.co/api/v1/'; // Reemplaza con la URL de tu API



export const removeData = async (url: string) => {

  console.log('remove data q tiene', url)
  await axios.delete(`${API_BASE_URL+url}`);
  
  console.log('entro en remove y...')
};

const PlatziAPI= async (url: string, id: number = null) => {

  if (id !==null) {
      const response = await fetch(`${API_BASE_URL+url}/${id}`);
      const data = await response.json();
      
      return data;
    } else {
      const response = await fetch(`https://api.escuelajs.co/api/v1/${url}`);
      const data = await response.json();
      
      return data;
    }
}

export default PlatziAPI


export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (productId: string) => axios.delete(`${API_BASE_URL}products/${productId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products'); // Invalida la caché para actualizar los datos
      },
    }
  );
};

