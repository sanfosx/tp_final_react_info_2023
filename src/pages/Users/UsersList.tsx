import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI';

const UsersList = () => {
  const { data, isLoading, isError, error } = useQuery('Users', () => PlatziAPI('users'));

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className='container-content'>
      <h1>Listado de Usuarios</h1>
      {data?.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <img src={user.avatar} alt="avatar del usuario" />
          <br />
          <Link to={`/users/${user.id}`}> Mas detalles</Link>
        </div>
      ))}
    </div>
  );
}

export default UsersList
