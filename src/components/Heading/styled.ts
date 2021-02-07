import styled, { css } from "styled-components";
import theme from "@constants/theme";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  /** Text content inside the Heading. */
  text: string;
  /** Heading tag level. E.g. `"h1"`. */
  tag: HeadingTag;
  /** Text alignment. Defaults to `left`. */
  align?: AlignSetting;
  /** Any margin? In `rem` units. */
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

export const StyledHeading = styled.h4<Partial<HeadingProps>>`
  ${({ margin }) => {
    if (margin) {
      return css`
        ${!isNaN(margin.bottom || 0)  && `margin-bottom: ${margin.bottom}rem;`}
        ${!isNaN(margin.right || 0) && `margin-right: ${margin.right}rem;`}
        ${!isNaN(margin.left || 0) && `margin-left: ${margin.left}rem;`}
        ${!isNaN(margin.top || 0) && `margin-top: ${margin.top}rem;`}
      `;
    }
  }}
  color: ${theme.colours.text};
  text-align: ${({ align }) => align || "left"};
  font-size: ${({ tag }) =>
    (tag && theme.typography[tag]) || theme.typography.h4}rem;
  letter-spacing: 0.3rem;
`;
