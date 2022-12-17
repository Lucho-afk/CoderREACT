import React from "react";
import Carrito from "../cartWidjet/Carrito";
import "./NavBar.css";
import image from "../../resources/icon.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navegacion">
      <div className="navegacion__div">
        <NavLink to={"home"}>
          <img src={image} alt="" className="logito" />
        </NavLink>
        <ul className="navegacion__div__contenedor">
          <li>
            <NavLink to={"accion"}>accion</NavLink>
          </li>
          <li>
            <NavLink to={"rpg"}>rpg</NavLink>
          </li>
          <li>
            <NavLink to={"carreras"}>carreras</NavLink>
          </li>
          <li>
            <NavLink to={"deportes"}>deportes</NavLink>
          </li>

          <Carrito></Carrito>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
