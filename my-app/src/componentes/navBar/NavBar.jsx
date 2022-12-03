import React from "react";
import Carrito from "../cartWidjet/Carrito";
import "./NavBar.css";
import image from "../../resources/icon.png";

const NavBar = () => {
  return (
    <nav className="navegacion">
      <div className="navegacion__div">
        <img src={image} alt="" className="logito" />
        <ul className="navegacion__div__contenedor">
          <li>
            <a href="/accion">accion</a>
          </li>
          <li>
            <a href="/rpg">rpg</a>
          </li>
          <li>
            <a href="/carreras">carrera</a>
          </li>
          <li>
            <a href="/deportes">deportes</a>
          </li>
          <Carrito></Carrito>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
