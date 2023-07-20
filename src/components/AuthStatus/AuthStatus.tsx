

import {useNavigate, Link} from 'react-router-dom'

import useAuth from "../../hooks/useAuth";

export default function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

 let user = localStorage.getItem('ACCESS_TOKEN')
  
  if (user) {
    return (
      <div>
      <p>
        Welcome {auth.userProfile && auth.userProfile.name}!{" "}
      </p>
       <button
       onClick={() => {
         auth.signout(() => navigate("/"));
       }}
     >
       Sign out
     </button>
     </div>
    );
   
  }
  return <li><Link to='./login'>Login</Link></li>;
  
}

