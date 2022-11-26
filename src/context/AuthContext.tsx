import React, { createContext, useReducer } from 'react';

import { authReducer } from './authReducer';

// Definir como luce que información tendré
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Interfaz para decirle a React como luce y que expone el contexto
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  return (
    <AuthContext.Provider value={{ authState, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
