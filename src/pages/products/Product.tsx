
import { Link } from 'react-router-dom'
import './Products.css'

const Product = ({ product }) => {


  return (
    <div className="card-product-container">
      <img className="product-img" src={product.images[0]} alt=""></img>
      <div className="">
        <h2 className="card-product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <Link to={`/products/${product.id}`}> Mas detalles</Link>
        <h3>${product.price}</h3>
        <div className="">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  )
}

export default Product
