import React from "react";
import { LoaderBar, LoaderWrapper } from "./styled";

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <LoaderBar delay={0} />
      <LoaderBar delay={0.25} />
      <LoaderBar delay={0.4} />
    </LoaderWrapper>
  );
};

export default Loader;
