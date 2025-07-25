import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Client from "./Pages/Client";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import Pricing from "./Pages/Pricing";
import { Toaster } from "react-hot-toast";
import Chat2 from "./Components/ChatComponents/Chat2";
import ChatPage from "./Pages/ChatPage";

import axios from "axios";
import AdminPanel from "./Components/ChatComponents/AdminPanel";
import LoginDialog from "./Components/ChatComponents/LoginDialog";
import AdminRoutes from "./Routes/AdminRoutes";
import BlogPage from "./Pages/BlogPage";
import BlogDescription from "./Components/BlogComponents/BlogDescription";
import BlogMarkdownForm from "./Components/BlogComponents/BlogMarkdownForm";
import Policy from "./Pages/Policy";
import { useAuth } from "./Components/Context/AuthContext";

export default function App() {
  const [adminState, setAdminState] = useState(null);
  const { admin } = useAuth(); // ✅ get admin from AuthContext
  const location = useLocation();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/admin/me`, { withCredentials: true })
      .then((res) => {
        setAdminState(res.data.username);
      })
      .catch(() => setAdminState(null));
  }, []);

  return (
    <>
      <div className="bg-[#FAF7F0]">
        <div className="">
          <Toaster position="top-center" />
          <ScrollToTop />

          {/* ✅ Render Chat2 only if NOT admin */}
          {!admin && <Chat2 />}

          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/client" element={<Client />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/blog/:id" element={<BlogDescription />} />

            <Route
              path="/add"
              element={
                <AdminRoutes>
                  <BlogMarkdownForm />
                </AdminRoutes>
              }
            />

            {/* {location.pathname !== "/add" && } */}

            <Route
              path="/chat"
              element={
                <AdminRoutes>
                  <ChatPage />
                </AdminRoutes>
              }
            />

            <Route
              path="/admin"
              element={
                adminState ? (
                  <AdminPanel />
                ) : (
                  <LoginDialog onLogin={setAdminState} />
                )
              }
            />
          </Routes>
          {!["/chat", "/add", "/admin"].includes(location.pathname) && (
            <Footer />
          )}
        </div>
      </div>
    </>
  );
}
