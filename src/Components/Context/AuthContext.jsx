import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.RENDER_URL;
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get(`${API_URL}/admin/me`, {
          withCredentials: true,
        });

        setAdmin(res.data);
      } catch (err) {
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, []);

  const login = (userData) => {
    setAdmin(userData);
  };

  const logout = async () => {
    try {
      await axios.post(
        `${API_URL}/admin/logout`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setAdmin(null);
    }
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
