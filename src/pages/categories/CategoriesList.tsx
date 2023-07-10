
import Category from '../categories/Category';
import { useQuery} from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';

const CategoriesList = () => {
  
  const { data, isLoading, isError, error } = useQuery('Categories', () => PlatziAPI('categories'));

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container-content'>
      <h1>Categorias</h1>
      {data?.map((category) => (
        <div key={category.id}>
          <Category category={category}></Category>
        </div>
      ))}
    </div>
  );
}

export default CategoriesList
