
import { Link } from 'react-router-dom'

const Category = ({ category }) => {
  return (
    < >
      <img className=" category-img" src={category.image} alt="imagen de la categoria" />

      <div className="card-content-category-list">
        <h1 className="card-title-categpory-list">{category.name}</h1>
        <Link to={`/categories/${category.id}`} state={{ categoryName: category.name }}> Ver productos</Link>
      </div>


    </>
  )
}

export default Category
