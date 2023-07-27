import {faGlobe, faPerson, faPersonBooth, faPersonCircleXmark, faPesoSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="list-none bg-blue-950 opacity-90 text-white h-24 flex justify-evenly items-center px-3 py-4 shadow-md overflow-hidden
    "
    >
      <div className="flex justify-center items-center gap-4">
      <Link to="/" className="px-2 py-2 overflow-hidden">
        <img src="/images/favl_logo.png" className="w-[170px]" alt="logo" />
      </Link>
      </div>
      
      <nav className="flex">
        <ul className="flex items-center gap-2">
            <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md bg-white text-gray50":"px-2 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/">
              <h1>Inicio</h1>
            </NavLink>
            <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md bg-white text-gray50":"px-2 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/piloto">
              <h1>Piloto</h1>
            </NavLink>
          <NavLink className={({isActive})=>isActive ? "px-1 py-1 rounded-md bg-white text-gray50":"px-1 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/favl">
              <h1>Clubes</h1>
          </NavLink>
          <li className="px-2 py-1 rounded-md  hover:bg-white hover:text-gray50">
            <a href="#contact">
              <h1>Contactanos</h1>
            </a>
          </li>
          <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md flex items-center bg-white text-gray50":"px-2 py-1 rounded-md flex items-center hover:bg-white hover:text-gray50"} to="/ingresar">
          <FontAwesomeIcon className="mr-1" icon={faPersonBooth} /><h1>ingresar</h1>
          </NavLink>
          <li className="px-1 py-2">
          <FontAwesomeIcon icon={faGlobe} />
            <select className="bg-transparent" id="">
              <option className="bg-morado" value="">Español</option>
              <option className="bg-morado" value="">English</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
