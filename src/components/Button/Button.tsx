import React from "react";
import { ButtonProps, StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => (
  <StyledButton onClick={onClick} type={type}>
    {text}
  </StyledButton>
);

export default Button;
