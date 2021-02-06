import styled from "styled-components";
import theme from "@constants/theme";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingAlignment = "center" | "left" | "right";

export interface HeadingProps {
  /** Text content inside the Heading. */
  text: string;
  /** Heading tag level. */
  tag: HeadingTag;
  /** Text alignment. */
  align: HeadingAlignment;
  /** Any margin? `rem` units. */
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

export const StyledHeading = styled.h4<Partial<HeadingProps>>`
  margin-top: ${({ margin }) =>
    (margin && margin.top && margin.top + "rem") || "initial"};
  margin-right: ${({ margin }) =>
    (margin && margin.right && margin.right + "rem") || "initial"};
  margin-bottom: ${({ margin }) =>
    (margin && margin.bottom && margin.bottom + "rem") || "initial"};
  margin-left: ${({ margin }) =>
    (margin && margin.left && margin.left + "rem") || "initial"};
  text-align: ${({ align }) => align || "center"};
  font-size: ${({ tag }) =>
    (tag && theme.typography[tag] + "rem") || theme.typography.h4 + "rem"};
  letter-spacing: 0.3rem;
`;
