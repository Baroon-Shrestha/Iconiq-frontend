import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { REDNDER_URL } from "../../url";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get(`${REDNDER_URL}/admin/me`, {
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
        `${REDNDER_URL}/admin/logout`,
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
