import React from "react";
import vaca from "../../resources/vacaPolaca.gif";
import { useState } from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [state, setState] = useState(false);
  const { mensaje } = props;

  const _handleClick = () => {
    setState((prev) => !prev);
  };

  return (
    <div className="vacaPolaca">
      <h1 onClick={_handleClick}>{mensaje}</h1>
      {state && <img src={vaca}></img>}
    </div>
  );
};

export default ItemListContainer;
