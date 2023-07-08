import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';
import BackButton from '../../components/BackButton/BackButton';

const ProductDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useQuery('ProductsDetails', () => PlatziAPI(`products/${id}`));


  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className='container-content'>

      {data ?
        <div key={data.id}>
          <h1> {id}- {data.title} </h1>
          <h2>$ {data.price}</h2>
          <p>{data.description}</p>
          <BackButton></BackButton>
        </div>
        : <></>
      }
    </div>
  );
}

export default ProductDetails
