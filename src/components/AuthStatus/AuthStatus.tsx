

import {useNavigate, Link} from 'react-router-dom'

import useAuth from "../../hooks/useAuth";

export default function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <li><Link to='./login'>Login</Link></li>;
  }

  return (
    <div>
    <p>
      Welcome {auth.user}!{" "}
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

