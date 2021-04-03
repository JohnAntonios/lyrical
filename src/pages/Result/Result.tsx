import React, { useEffect, useState } from "react";
import { Params, Redirect } from "wouter";
import { parse } from "query-string";
import { SongSearchFormData } from "$typings";
import Loader from "@components/Loader";
import Heading from "@components/Heading";
import useQueryLyricsOVH from "@hooks/useQueryLyricsOVH";
import { BackLink, Lyrics, TitleWrapper } from "./styled";
import { useQueryClient } from "react-query";

type ResultParams = {
  query: string;
};

interface ResultProps {
  params: Params<ResultParams>;
}

const Result: React.FC<ResultProps> = ({ params }) => {
  const [hideLoader, setHideLoader] = useState<boolean>(false);

  const search = parse(params.query) as SongSearchFormData;

  if (!params.query || !search.artist || !search.track)
    return <Redirect to="/" />;

  const { isLoading, error, data } = useQueryLyricsOVH(search);

  useEffect(() => {
    if (!isLoading) {
      const interval = setTimeout(() => {
        setHideLoader(true);
      }, 500);
      return () => clearTimeout(interval);
    }
  }, [isLoading]);

  const isReady = !isLoading && !error && hideLoader;

  return (
    <div>
      {isReady && <BackLink to="/">Back to Search</BackLink>}
      <TitleWrapper>
        <Heading
          tag="h6"
          align="center"
          margin={{ left: 4, right: 4, bottom: 0 }}
          text={`'${search.track}' - ${search.artist}`}
        />
      </TitleWrapper>
      {!hideLoader && <Loader isLoading={isLoading} />}
      {isReady && (
        <Lyrics>{data ? data.lyrics.trim() : "No lyrics found."}</Lyrics>
      )}
      <BackLink to="/">Back to Search</BackLink>
    </div>
  );
};

export default Result;
