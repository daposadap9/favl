import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Piloto from "./pages/Piloto";
import Favl from "./pages/Favl";
import HeaderComplete from "./components/header/HeaderComplete";
import { useEffect, useRef, useState } from "react";
import Banner from "./components/banner/Banner";
import Login from "./pages/Login";
import Contact from "./components/contact/Contact";

function App() {
  const containerWidth = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    //funcion y disparador para almacenar el width en el useState()
    function handleResize() {
      const elementWidth = containerWidth.current.offsetWidth;
      setWidth(elementWidth);
    }
    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const location = useLocation();
  const isLoginPage = location.pathname === "/ingresar";

  return (
    <>
      <div className="App" ref={containerWidth}>
        <HeaderComplete width={width} />
        {!isLoginPage ? <Banner /> : ""}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piloto" element={<Piloto />} />
          <Route path="/favl" element={<Favl />} />
          <Route path="/ingresar" element={<Login />} />
        </Routes>
        <Contact />
      </div>
    </>
  );
}

export default App;
