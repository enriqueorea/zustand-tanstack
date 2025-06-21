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
    <circle
      cx="12"
      cy="12"
      r="10"
      fill={isFavorite ? "red" : "white"}
      stroke="black"
      strokeWidth="2"
    />
    <path d="M4 12H20" stroke="black" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" fill="white" stroke="black" strokeWidth="2" />
  </svg>
);

export default PokeballIcon;
