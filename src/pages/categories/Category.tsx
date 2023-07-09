import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({category}) => {
  return (
    <div>
      <h2>{category.name}</h2>
      <img src={category.image} alt="imagen de la categoria" />
      <br />
      <Link to={`/categories/${category.id}`}> Ver productos</Link>
    </div>
  )
}

export default Category
