
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import BackButton from '../../components/BackButton/BackButton';
import PlatziAPI from '../../components/PlatziAPI/PlatziAPI'

const UserDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useQuery('UsersDetails', () => PlatziAPI(`users/${id}`));

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error: {error?}</div>;
  }

  return (
    <div className='container-content'>
      
      {data? 
        <div key={data.id} >
          <h1>{data.id}-{data.name}</h1>
          <img src={data.avatar} alt="avatar del usuario" />
          <br />
          <BackButton></BackButton>
        </div>
      :
      <></>}
    </div>
  );
}

export default UserDetails
