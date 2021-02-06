import React from "react";
import { StyledFooter } from "./styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      ©{" "}
      <a
        href="https://github.com/JohnAntonios"
        target="_blank"
        rel="noopener noreferrer"
      >
        John Antonios 2021
      </a>
    </StyledFooter>
  );
};

export default Footer;
