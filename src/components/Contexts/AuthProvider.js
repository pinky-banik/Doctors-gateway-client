import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';




export const  AuthContext = createContext();

const AuthProvider = ({children}) => {
    const AllContexts = useFirebase();
    return(
        <AuthContext.Provider value={AllContexts}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;