
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';
import Product from './Product';
import './Products.css'

const ProducstList = () => {
  const { data, isLoading, isError, error } = useQuery('Products', () => PlatziAPI('products'));


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
          <p>filter</p>
        </div>
        <div className="cards-content-product-list">
          {data?.map((product) => (
            <div className="card-products-list" key={product.id}>
              <Product product={product}></Product>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default ProducstList
