import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';


const CategoryDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useQuery('Categories', () => PlatziAPI(`categories/${id}/products`));

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className='container-content'>
      <h1>Lista de Productos de la categoria {id} </h1>
      {data?.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <p>{product.description}</p>
          <Link to={`/products/${product.id}`}> Mas detalles</Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryDetails
