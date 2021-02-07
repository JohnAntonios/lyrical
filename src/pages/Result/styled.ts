import theme from "@constants/theme";
import styled from "styled-components";
import { Link, LinkProps } from "wouter";

export const TitleWrapper = styled.div`
  width: 100%;
  min-width: 80%;
  text-transform: capitalize;
  transition: all 1s ease;
`;

export const Lyrics = styled.p`
  @keyframes show {
    from {
      opacity: 0;
      transform: scaleY(0);
    }
    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  font-size: ${theme.typography.body - 0.5}rem;
  color: ${theme.colours.text};
  text-align: center;
  transform-origin: top;
  white-space: pre-line;
  line-height: 1.5;
  width: 100%;
  min-width: 80%;
  animation: show 0.5s ease-in-out;
`;

export const BackLink = styled(Link)<LinkProps>`
  font-size: ${theme.typography.body}rem;
  text-align: center;
  color: ${theme.colours.primary};
  display: block;
  margin: 5rem auto;
`;