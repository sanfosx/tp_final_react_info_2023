import {useState} from 'react'
import { useQuery, useQueryClient, useMutation } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';
import Product from './Product';
import { useDeleteData} from '../../components/PlatziAPI/PlatziAPI';
import Modal from '../../components/Modal/Modal';
import './Products.css'

const ProducstList = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('products', () => PlatziAPI('products'));

  const deleteProductMutation = useDeleteData();


  const handleDeleteProduct = async (productId: number) => {
    await deleteProductMutation.mutateAsync(`products/${productId}`); // Usar mutacion asincrona

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
    <div className='product-list-container'>
      <div className="product-list-title">
        <h1>Lista de Productos</h1>
      </div>
      <div className="product-list-content">
        <div className="product-list-filter">
          <h2>FILTROS</h2>
        </div>
        <div className="cards-content-product-list">
          {data?.map((product) => (
            <div className="card-products-list" key={product.id}>
              <Product product={product} onDeleteProduct={handleDeleteProduct} ></Product>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProducstList
