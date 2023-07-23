

import axios from 'axios';

const API_BASE_URL = 'https://api.escuelajs.co/api/v1/'; // Reemplaza con la URL de tu API



export const removeCategory = async (id: number) => {
  await axios.delete(`${API_BASE_URL}categories/${id}`);
  console.log('entro en remove y...')
};

const PlatziAPI= async (url: string, id: number = null) => {

  if (id !==null) {
      const response = await fetch(`${API_BASE_URL+url}/${id}`);
      const data = await response.json();
      console.log(data)
      return data;
    } else {
      const response = await fetch(`https://api.escuelajs.co/api/v1/${url}`);
      const data = await response.json();
      console.log(data)
      return data;
    }
}

export default PlatziAPI
