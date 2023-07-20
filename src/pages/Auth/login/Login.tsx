import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import { UserLoginData } from '../../../contexts/AuthContext/AuthContext';
import axios from 'axios'
import { useMutation } from 'react-query'

const Login = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  const signinMutation = useMutation((data: UserLoginData) => {

    return axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
  },
    {
      onSuccess: (data) => {
        const userData = {
          access_token: data.data.access_token,
        };
        auth.signin(userData, () => {
          // Send them back to the page they tried to visit when they were
          // redirected to the login page. Use { replace: true } so we don't create
          // another entry in the history stack for the login page.  This means that
          // when they get to the protected page and click the back button, they
          // won't end up back on the login page, which is also really nice for the
          // user experience.

          navigate(from, { replace: true });
        });
      },

    });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let email = formData.get("email") as string;
    let password = formData.get('password') as string;
    let newUser: UserLoginData = { email, password }

    signinMutation.mutate(newUser)

  }

  if (auth.user !== null) {

    return navigate('/')
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Email: <input name="email" type="email" />
        </label>{" "}
        <label>
          Password: <input name="password" type="password" />
        </label>{" "}
        <button type="submit">{signinMutation.isLoading ? 'Cargando' : 'Login'}</button>
      </form>
      <br />
      <button onClick={() => navigate('/register')}>Registrarse</button>
    </div>
  );


}

export default Login
