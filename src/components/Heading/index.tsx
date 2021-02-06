import React from "react";
import { HeadingProps, StyledHeading } from "./styled";

const Heading: React.FC<HeadingProps> = ({ text, tag, align, margin }) => {
  return (
    <StyledHeading as={tag} tag={tag} align={align} margin={margin}>
      {text}
    </StyledHeading>
  );
};

export default Heading;
