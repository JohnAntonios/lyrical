import theme from "@constants/theme";
import { Ref, RefObject } from "react";
import styled from "styled-components";

export interface TextFieldProps {
  /** `id` html attribute.
   *
   * Will also be used for `name` html attribute.
   */
  id: string;
  /** Text for the label. */
  labelText: string;
  /** React Ref for controlling component. */
  inputRef?: Ref<HTMLInputElement> | null;
  /** `required` html attribute. */
  required?: boolean;
  /** Pre-populated value */
  populatedValue?: string;
}

export const TextFieldWrapper = styled.div<{
  focused: boolean;
}>`
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  width: 100%;
  background-color: transparent;
  border: ${({ focused }) =>
    focused
      ? "0.2rem solid " + theme.colours.primary
      : "0.15rem solid rgba(0, 0, 0, 0.6)"};
`;

export const TextFieldLabel = styled.label<{
  focused: boolean;
  changed: boolean;
}>`
  position: absolute;
  left: 1.2rem;
  top: 25%;
  pointer-events: none;
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  font-size: ${({ focused, changed }) =>
    focused || changed ? "1.7rem" : "1.8rem"};
  background-color: ${({ focused, changed }) =>
    focused || changed ? "white" : "initial"};
  color: ${({ focused }) => (focused ? theme.colours.primary : theme.colours.text)};
  padding: ${({ focused }) => (focused ? "0 2rem" : "0 1rem")};
  transform: ${({ focused, changed }) =>
    focused || changed ? "translateY(-3rem) translateX(-2rem)" : "initial"};
`;

export const TextFieldInput = styled.input`
  border: none;
  flex-grow: 1;
  padding: 1.4rem;
  border-radius: 0.3rem;
  font-family: ${theme.font};
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.8);
  border: 0.1rem solid transparent;
  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
