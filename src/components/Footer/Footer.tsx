import React from "react";
import { StyledFooter } from "./styled";

const Footer: React.FC = () => (
  <StyledFooter>
    ©{" "}
    <a
      href="https://github.com/JohnAntonios"
      target="_blank"
      rel="noopener noreferrer"
    >
      John Antonios {new Date().getFullYear()}
    </a>
  </StyledFooter>
);

export default Footer;
