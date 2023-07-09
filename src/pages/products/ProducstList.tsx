import React from 'react'
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';
import Product from './Product';

const ProducstList = () => {
  const { data, isLoading, isError, error } = useQuery('Products', () => PlatziAPI('products'));


  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className='container-content'>
      <h1>Lista de Productos</h1>

      {data?.map((product) => (
        <div key={product.id}>
          <Product product={product}></Product>
        </div>
      ))}

    </div>
  );
}

export default ProducstList
