import {useState} from 'react'
import Category from '../categories/Category';
import { useQuery, useMutation } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';
import { useDeleteData, useCreateData } from '../../components/PlatziAPI/PlatziAPI';
import Modal from '../../components/Modal/Modal'
import './Categories.css'

const CategoriesList = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('Categories', () => PlatziAPI('categories'));

  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImg, setCategoryImg] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

//CREATE




const createCategoryMutation = useCreateData();
const handleCreateCategory = async () => {
  const newCategory = {
    name: categoryName,
    image: categoryImg,
  };

  console.log('que tiene newdata', newCategory)
  await createCategoryMutation.mutateAsync(newCategory); // Usar mutacion asincrona

  // Después de eliminar, volver a cargar los datos
  refetch();
  closeModal()
};

  //ELIMINAR
  const deleteCategoryMutation = useDeleteData();
  const handleDeleteCategory = async (categoryId: number) => {
    await deleteCategoryMutation.mutateAsync(`categories/${categoryId}`); // Usar mutacion asincrona

    // Después de eliminar, volver a cargar los datos
    refetch();
  };

//CARGA
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
        <button onClick={openModal}>+ Agregar</button>
      </div>
      <div className='category-list-content'>
        {data?.map((category) => (
          <div className="card-category-list" key={category.id}>
            <Category category={category} onDeleteCategory={handleDeleteCategory}></Category>
          </div>
        ))}
      </div>

      <Modal open={showModal} onClose={closeModal}>
      <div className="modal-content">
          <h2>Crear nueva categoría</h2>
          <br />
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Nombre de la categoría"
          />
          <br />
           <input
            type="text"
            value={categoryImg}
            onChange={(e) => setCategoryImg(e.target.value)}
            placeholder="Url de la imagen para la categoría"
          />
          <br />
          <button onClick={closeModal}>Cancelar</button>
          <button onClick={handleCreateCategory}>Crear categoría</button>
        </div>
        
       
      </Modal>
    </div>
  );
}

export default CategoriesList
