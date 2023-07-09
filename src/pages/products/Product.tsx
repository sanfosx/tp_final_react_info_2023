import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {


  return (
    <div>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
      <Link to={`/products/${product.id}`}> Mas detalles</Link>
    </div>
  )
}

export default Product
