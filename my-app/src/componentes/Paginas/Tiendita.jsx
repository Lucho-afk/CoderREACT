import React from "react";
import { Outlet } from "react-router-dom";
import CartaJuego from "../CartaJuego/CartaJuego";
import "./categoria.css";

const Tiendita = (props) => {
  const { lista } = props;
  return (
    <>
      <div id="conteiner">
        {lista.map((jogo, index) => (
          <CartaJuego
            key={index}
            id={jogo.id}
            img={jogo.img}
            titulo={jogo.titulo}
            descrpicion={jogo.descripcion}
          ></CartaJuego>
        ))}
      </div>
    </>
  );
};

export default Tiendita;
