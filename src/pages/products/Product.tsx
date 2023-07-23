import {useState} from 'react'
import ReactDOM from "react-dom/client";
import {useMutation, useQuery, useQueryClient} from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { removeData } from '../../components/PlatziAPI/PlatziAPI';
import Modal from '../../components/Modal/Modal'
import './Products.css'
import ProducstList from './ProducstList';

export interface Product {
  category:    Category;
  creationAt:  Date;
  description: string;
  id:          string;
  images:      string[];
  price:       string;
  title:       string;
  updatedAt:   Date;
 }
 
 export interface Category {
  creationAt: Date;
  id:         string;
  image:      string;
  name:       Name;
  updatedAt:  Date;
 }
interface ProductProps {
  product:product; // Asegúrate de reemplazar YourProductType con el tipo correcto de tus productos
  onDeleteProduct: (id: string) => void;
}



const Product:React.FC<ProductProps> = ({ product, onDeleteProduct }) => {

  const handleDeleteClick = () => {
    onDeleteProduct(product.id);
    closeModal()
  };
  
  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  

  return (
    <div className="card-product-container">
      <img className="product-img" src={product.images[0]} alt=""></img>
      <div className="">
        <div className="card-product-actions">
          <Link className="product-icon" to={`/products/${product.id}/edit`}> <BsPencilSquare/></Link>
          <BsFillTrash3Fill className="product-icon" onClick={openModal}/>
        </div>
        <h2 className="card-product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <Link to={`/products/${product.id}`}> Mas detalles</Link>
        <h3>${product.price}</h3>
        <div className="">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <Modal open={showModal} onClose={closeModal}>
        <h2>Estas Seguro?</h2>
        <p>Esta accion no se puede revertir</p>
        <button onClick={closeModal}>Cancelar</button>
        <button onClick={handleDeleteClick }>Eliminar</button>
       
        {/* Puedes pasar cualquier componente como contenido */}
        {/* <CustomComponent onClose={closeModal} /> 
        {useRemoveData.isLoading?'Eliminando' : 'Eliminar'}*/}
      </Modal>
    </div>
  )
}

export default Product
