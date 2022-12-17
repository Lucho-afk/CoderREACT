import React from "react";
import { useState } from "react";
import { JuegoContext } from "./JuegoContext";

const JuegoProvider = ({ children }) => {
  const [juego, setJuego] = useState([]);
  return (
    <JuegoContext.Provider value={{ juego, setJuego }}>
      {children}
    </JuegoContext.Provider>
  );
};

export default JuegoProvider;
