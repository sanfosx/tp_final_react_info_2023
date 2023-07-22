import Category from '../categories/Category';
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';
import './Categories.css'

const CategoriesList = () => {

  const { data, isLoading, isError, error } = useQuery('Categories', () => PlatziAPI('categories'));

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="category-list-container">
      <div className="category-list-title">
        <h1>Categorias</h1>
      </div>
      <div className='category-list-content'>
        {data?.map((category) => (
          <div className="card-category-list" key={category.id}>
            <Category category={category}></Category>
          </div>
        ))}
      </div>
    </div>

  );
}

export default CategoriesList
