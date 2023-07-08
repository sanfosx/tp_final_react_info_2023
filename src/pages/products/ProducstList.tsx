import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';

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
          <h2>{product.title}</h2>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
          <Link to={`/products/${product.id}`}> Mas detalles</Link>
          
        </div>
      ))}
    </div>
  );
}

export default ProducstList
