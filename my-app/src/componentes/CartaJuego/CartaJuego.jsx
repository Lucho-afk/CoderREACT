import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { JuegoContext } from "../Contexto/JuegoContext";

const CartaJuego = (props) => {
  const { img, titulo, id, descrpicion } = props;
  const { setJuego } = useContext(JuegoContext);
  console.log(id);
  return (
    <Card bg={"light"} style={{ width: "18rem" }} text="dark">
      <Card.Img variant="top" src={img} />
      <Card.Body bg={"light"}>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descrpicion}</Card.Text>
        <Link to={id}>
          <Button variant="dark" onClick={setJuego(id)}>
            Mas info
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CartaJuego;
