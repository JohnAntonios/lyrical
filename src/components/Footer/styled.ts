import theme from "@constants/theme";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  margin: 3rem;
  text-align: center;
  font-size: ${theme.typography.small}rem;
  color: ${theme.colours.primary};
  a {
    color: ${theme.colours.primary};
  }
`;
