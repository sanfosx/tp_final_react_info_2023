import axios from 'axios'
import { useEffect, useState, createContext } from "react";

export interface UserLoginData {
  email: string;
  password: string;
}
export interface UserLoginDataResponse {

  access_token: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: UserLoginDataResponse | null;
  userProfile: UserProfileData | null;
  signin: (user: UserLoginDataResponse, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export interface UserProfileData {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: date;
  updateAt: date;
};






export let AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState<UserLoginDataResponse | null>(null!);
  let [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  let signin = (newUser: UserLoginDataResponse, callback: VoidFunction) => {

    setUser(newUser);
    setUserProfile(fetchUserProfile(newUser));
    localStorage.setItem('ACCESS_TOKEN', user)
    localStorage.setItem('USER_PROFILE', JSON.stringify(userProfile))
    setIsLoggedIn(true);
    
    console.log(localStorage.getItem('ACCESS_TOKEN'))
    return callback();

  };

  let signout = (callback: VoidFunction) => {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('USER_PROFILE')
    setUser(null)
    setIsLoggedIn(false);

    return callback();

  };

  console.log(userProfile)
  let value = { user, signin, signout, userProfile, isLoggedIn };



  useEffect(() => {
    const storedAccessToken = localStorage.getItem('ACCESS_TOKEN');
    const storedUserProfile = localStorage.getItem('USER_PROFILE');

    console.log('leeeee', storedAccessToken, storedUserProfile)
    if (storedAccessToken && storedUserProfile) {
      setUser(storedAccessToken);
      setUserProfile(JSON.parse(storedUserProfile))
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        console.log(user)
        // Simulación de solicitud de información del perfil del usuario
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
          const storedUserProfile = localStorage.setItem('USER_PROFILE', JSON.stringify(data));
          const storedAccessToken = localStorage.setItem('ACCESS_TOKEN', user);
  
        }
      }
    };

    fetchProfile();
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider