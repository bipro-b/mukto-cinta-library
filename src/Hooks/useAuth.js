import { useContext } from 'react';
import { AuthContext } from '../contexts/Authprovider/AuthProvider';


const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;