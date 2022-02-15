import React, { useState } from "react";

const EstadoPrueba = () => {
  export const [usuario, setUsuario] = useState([]);

  setUsuario([2, 3, 34, 45, 5, 6, 7]);

  return <div>EstadoPrueba</div>;
};

export default EstadoPrueba;
