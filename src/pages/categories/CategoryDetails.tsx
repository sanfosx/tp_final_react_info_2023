
import { Link, useParams, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';


const CategoryDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useQuery('Categories', () => PlatziAPI(`categories/${id}/products`));

  const{ state }= useLocation()

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container-content'>
      <h1>Categoria {state.categoryName} </h1>
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
