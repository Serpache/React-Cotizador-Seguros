import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  background-color: rgb(127, 224, 237);
  padding: 0.5rem;
  border: 1px solid #26c6da;
  margin-top: 1rem;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y plan de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
    </ResultadoCotizacion>
  );
};

export default Resultado;
