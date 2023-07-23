import Category from '../categories/Category';
import { useQuery, useMutation } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';
import { useDeleteData } from '../../components/PlatziAPI/PlatziAPI';
import './Categories.css'

const CategoriesList = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('Categories', () => PlatziAPI('categories'));
  const deleteCategoryMutation = useDeleteData();
  const handleDeleteCategory = async (categoryId: number) => {
    await deleteCategoryMutation.mutateAsync(`categories/${categoryId}`); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    refetch();
  };

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
            <Category category={category} onDeleteCategory={handleDeleteCategory}></Category>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList
