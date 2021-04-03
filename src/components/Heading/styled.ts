import styled, { css } from "styled-components";
import theme from "@constants/theme";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingMarginPositions = "top" | "bottom" | "left" | "right";

export interface HeadingProps {
  /** Text content inside the Heading. */
  text: string;
  /** Heading tag level. E.g. `"h1"`. */
  tag: HeadingTag;
  /** Text alignment. Defaults to `left`. */
  align?: AlignSetting;
  /** Any margin? In `rem` units. */
  margin?: {
    [key in HeadingMarginPositions]?: number | "auto" | "none";
  };
}

export const StyledHeading = styled.h4<Partial<HeadingProps>>`
  ${({ margin }) => {
    if (margin) {
      const cssMargins = Object.keys(margin).map((marginPosition) => {
        const marginPositionValue =
          margin[marginPosition as HeadingMarginPositions];

        if (marginPositionValue) {
          return `margin-${marginPosition}: ${marginPositionValue}rem;`;
        }
      });

      return css`
        ${cssMargins.join("\n")}
      `;
    }
  }}
  color: ${theme.colours.text};
  text-align: ${({ align }) => align || "left"};
  font-size: ${({ tag }) =>
    (tag && theme.typography[tag]) || theme.typography.h4}rem;
  letter-spacing: 0.3rem;
`;
