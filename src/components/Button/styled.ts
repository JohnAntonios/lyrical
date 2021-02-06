import styled from "styled-components";
import theme from "@constants/theme";

type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  /** Text content inside the Button. */
  text: string;
  /** Type of Button. Default = `button`. */
  type?: ButtonType;
}

export const StyledButton = styled.button`
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-family: ${theme.font};
  background-color: ${theme.colours.primary};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${theme.colours.primaryDark};
  }
  &:active,
  &:focus {
    outline: none;
    background-color: ${theme.colours.primaryDark};
    box-shadow: 0px 0px 20px ${theme.colours.primaryDarker};
  }
`;
