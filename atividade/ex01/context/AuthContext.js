import React, { createContext, useState, useEffect, useRef } from 'react';
import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const blockUpdate = useRef(false); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!blockUpdate.current) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const register = async (email, password, displayName) => {
    blockUpdate.current = true;
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      // Não atualiza user aqui
    } catch (error) {
      blockUpdate.current = false;
      setLoading(false);
      throw error;
    }
  };

  const finalizeRegistration = async () => {
    blockUpdate.current = false;
    const currentUser = auth.currentUser;
    setUser(currentUser);
    setLoading(false);
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    blockUpdate.current = true; 
    await signOut(auth);
    blockUpdate.current = false;
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        finalizeRegistration,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};