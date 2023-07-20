import React, { useState } from 'react';
import { useMutation } from 'react-query'

import axios from 'axios'

interface UserDataRegister {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface EmailResponse {
  email: string;
}

const Register: React.FC = () => {


  const registerMutation = useMutation(async (dataUser) => {
    const response = await axios.post('https://api.escuelajs.co/api/v1/users/', dataUser
    );
    console.log('register')
    return response.data;
  });

  const checkEmailAvailability = async (email: EmailResponse) => {
    try {
      const response = await axios.post(
        'https://api.escuelajs.co/api/v1/users/is-available', { email }
      );
      console.log(response.data)
      return response.data.available;
    } catch (error) {
      console.log('Error checking email availability:', error);
    }
  };


  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let email = formData.get("email") as string;
    let password = formData.get('password') as string;
    let name = formData.get('name') as string;
    let avatar = 'https://api.lorem.space/image/face?w=640&h=480&r=867'

    let newUser: UserDataRegister = { name, email, password, avatar }

    registerMutation.mutate(newUser);





  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <label>
          Nombre: <input name="name" type="text" />
        </label>{" "}
        <br />

        <label>
          Email: <input name="email" type="email" />
        </label>{" "}
        <br />

        <label>
          Password: <input name="password" type="password" />
        </label>{" "}
        <br />
        <br />

        <button>{registerMutation.isLoading ? 'Registrando...' : 'Registrarse'} </button>
      </form>
    </div>
  );
};

export default Register;




















/*import axios from 'axios'

interface UserDataRegister{
  name: string;
  email: string;
  password: string;
}




function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  let formData = new FormData(event.currentTarget);
  let email = formData.get("email") as string;
  let password = formData.get('password') as string;
  let name = formData.get('name') as string;

  let newUser: UserDataRegister= {name, email, password}

  createUser(newUser)
 
}
const register = () => {
  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nombre: <input name="name" type="text" />
        </label>{" "}
        <br />

        <label>
          Email: <input name="email" type="email" />
        </label>{" "}
        <br />
        
        <label>
          Password: <input name="password" type="password" />
        </label>{" "}
        <br />
        <br />
       
        <button>registro </button>
      </form>
    </div>
  )
}

export default register*/
