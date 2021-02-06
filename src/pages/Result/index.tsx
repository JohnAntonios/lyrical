import React from "react";
import { Params, Redirect } from "wouter";
import { parse } from "query-string";
import { SongSearchFormData } from "@typings/core";

type ResultParams = {
  query: string;
};

interface ResultProps {
  params: Params<ResultParams>;
}

const Result: React.FC<ResultProps> = ({ params }) => {
  const search = parse(params.query) as SongSearchFormData;

  if (!params || !params.query || !search || !search.artist || !search.track)
    return <Redirect to="/" />;

  return (
    <>
      <h1>
        Searching for: {search.track} by '{search.artist}'
      </h1>
    </>
  );
};

export default Result;
