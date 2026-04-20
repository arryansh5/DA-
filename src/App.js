import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainLayout from "./Layout/MainLayout";
// import ProjectDetail from "./sections/ProjectDetail";
import Cursor from "./components/Cusor";

import "./App.css";
import "./Hero.css";

/* 🔥 Wrapper that controls scroll */
function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/project")) {
      document.body.style.overflow = "auto";   // ✅ allow scroll
    } else {
      document.body.style.overflow = "hidden"; // ✅ lock scroll
    }
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
      </Routes>
    </>
  );
}

/* 🔥 Main App */
export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper /> {/* ✅ IMPORTANT */}
    </BrowserRouter>
  );
}