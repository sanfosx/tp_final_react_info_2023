import React from 'react'
import {AuthContext} from '../contexts/AuthContext/AuthContext';


function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth