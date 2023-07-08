
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar navbar-container">
      <div className="logo-content">
        <Link to='./'>
          <img src='../../../public/img/e-commerceLogo.jpg' alt="" className="logo-img" />
        </Link>
        <p className='p-nav'>E-Commerce App</p>
      </div>

      <ul className="content-links">
        <li><Link to="./categories">Categorias</Link></li>
        <li><Link to='./products'>Productos</Link></li>
        <li><Link to='./users'>Usuarios</Link></li>
        <li><Link to='./login'>Login</Link></li>
      </ul>

    </div>
  )
}

export default Navbar
