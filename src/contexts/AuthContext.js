import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [loading, setLoading] = useState(false);

  function signIn() {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(function () {
        setLogado(true);
        setLoading(false);
      }, 2000);
    });
  }

  return (
    <AuthContext.Provider value={{ logado, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
