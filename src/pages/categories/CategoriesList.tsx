import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery} from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';

const CategoriesList = () => {
  
  const { data, isLoading, isError, error } = useQuery('Categories', () => PlatziAPI('categories'));

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className='container-content'>
      <h1>Categorias</h1>
      {data?.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <img src={category.image} alt="imagen de la categoria" />
          <br/>
          <Link to={`/categories/${category.id}`}> Ver productos</Link>
        </div>
      ))}
    </div>
  );
}

export default CategoriesList
