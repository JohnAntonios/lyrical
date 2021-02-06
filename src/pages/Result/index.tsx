import React from "react";
import { Params, Redirect } from "wouter";
import { parse } from "query-string";
import { SongSearchFormData } from "@typings/core";
import Loader from "@components/Loader";
import Heading from "@components/Heading";

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
      <Heading
        tag="h6"
        align="left"
        margin={{ left: 2, right: 2 }}
        text={`'${search.track}' - ${search.artist}`}
      />
      <Loader />
    </>
  );
};

export default Result;
