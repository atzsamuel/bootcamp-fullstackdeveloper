import React from "react";

const Boton = ({ config }) => {
  const { tipo, operacion } = config;
  return (
    <>
      <button
        onClick={() => {
          operacion();
        }}
      >
        {tipo}
      </button>
    </>
  );
};
export default Boton;
