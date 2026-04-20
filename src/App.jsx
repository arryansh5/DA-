import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainLayout from "./Layout/MainLayout";
import Cursor from "./components/Cusor";

import "./App.css";
import "./Hero.css";


function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/project")) {
      document.body.style.overflow = "auto";   
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper /> 
    </BrowserRouter>
  );
}