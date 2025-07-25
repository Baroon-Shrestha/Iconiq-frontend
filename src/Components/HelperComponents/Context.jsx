// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { REDNDER_URL } from "../../../url";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check login status on initial load
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

  const login = (adminData) => {
    setAdmin(adminData);
  };

  const logout = async () => {
    await axios.post(
      `${REDNDER_URL}/admin/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
