import theme from "@constants/theme";
import styled from "styled-components";

interface LoaderBarProps {
  delay: number;
}

export const LoaderWrapper = styled.div`
  position: relative;
  margin: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderBar = styled.div<LoaderBarProps>`
  @keyframes loader {
    from {
      transform: scale3d(1, 1, 1);
    }
    to {
      transform: scale3d(2, 2, 2);
    }
  }
  transform-style: preserve-3d;
  width: 0.3rem;
  height: 2.5rem;
  margin-right: 1rem;
  background-color: ${theme.colours.primary};
  animation: ${({ delay }) => `loader 0.5s ease-in-out ${delay}s infinite
    alternate;`};
`;
