import React from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { JuegoContext } from "../Contexto/JuegoContext";
import "./masInfo.css";

const MasInfo = (props) => {
  const { lista } = props;
  let location = useLocation();
  let palabra = location.pathname + "";
  let ida = palabra.split("/");
  const found = lista.find((elemento) => ida[2] == elemento.id);
  return (
    <div id={"conteiner"}>
      <Card className="bg-dark text-white" id={"masInfoCarta"}>
        <Card.Img src={found.img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{found.titulo}</Card.Title>
          <Card.Text>{found.descripcion}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default MasInfo;
