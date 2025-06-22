import React from "react";

interface PokeballIconProps {
  isFavorite: boolean;
  size?: number;
}

const PokeballIcon: React.FC<PokeballIconProps> = ({
  isFavorite,
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Círculo exterior */}
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />

    {/* Parte superior - roja cuando es favorito, gris cuando no */}
    <path
      d="M 2,12 A 10,10 0 0,1 22,12 Z"
      fill={isFavorite ? "#ef4444" : "#e5e7eb"}
      stroke="black"
      strokeWidth="2"
    />

    {/* Parte inferior - siempre blanca */}
    <path
      d="M 2,12 A 10,10 0 0,0 22,12 Z"
      fill="white"
      stroke="black"
      strokeWidth="2"
    />

    {/* Línea divisoria central */}
    <path d="M4 12H20" stroke="black" strokeWidth="2" />

    {/* Círculo central - botón de la pokeball */}
    <circle cx="12" cy="12" r="3" fill="white" stroke="black" strokeWidth="2" />

    {/* Círculo interior del botón */}
    <circle
      cx="12"
      cy="12"
      r="1.5"
      fill="none"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
);

export default PokeballIcon;
