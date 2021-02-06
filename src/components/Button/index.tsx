import React from "react";
import { ButtonProps, StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

export default Button;
