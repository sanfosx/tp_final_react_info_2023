
import {useState} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom'
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { removeData } from '../../components/PlatziAPI/PlatziAPI';


const Category = ({ category }) => {

  const client = useQueryClient();

  const removeDataMutation = useMutation(removeData, {
    onSuccess: () => {
      client.invalidateQueries('categories'); // Invalida la caché para actualizar los datos
      setShowModal(false)
    },
  });

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteCategory = (id:string) =>{
    removeDataMutation.mutate(`categories/${id}`);
    console.log('asdfsdf',id)
    
  }

  
  

  return (
    <>
      <img className=" category-img" src={category.image} alt="imagen de la categoria" />
      <div className="card-content-category-list">
        <h1 className="card-title-categpory-list">{category.name}</h1>
        <Link to={`/categories/${category.id}`} state={{ categoryName: category.name }}> Ver productos</Link>
        <div className="card-category-actions">
          <Link className="category-icon" to={`/categories/${category.id}/edit`}><BsPencilSquare /></Link>
          <BsFillTrash3Fill className="category-icon" onClick={openModal}/>
        </div>
      </div>
      <Modal open={showModal} onClose={closeModal}>
        <h2>Estas Seguro?</h2>
        <p>Esta accion no se puede revertir</p>
        <button onClick={closeModal}>Cancelar</button>
        <button onClick={()=>deleteCategory(category.id)}>{removeDataMutation.isLoading?'Eliminando': 'Eliminar'}</button>
       { console.log(category.id)}
        {/* Puedes pasar cualquier componente como contenido */}
        {/* <CustomComponent onClose={closeModal} /> */}
      </Modal>
    </>
  )
}

export default Category
