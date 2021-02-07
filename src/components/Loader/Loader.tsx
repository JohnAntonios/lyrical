import React from "react";
import { LoaderBar, LoaderWrapper } from "./styled";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <LoaderWrapper>
      <LoaderBar isLoading={isLoading} delay={0} />
      <LoaderBar isLoading={isLoading} delay={0.25} />
      <LoaderBar isLoading={isLoading} delay={0.4} />
    </LoaderWrapper>
  );
};

export default Loader;
