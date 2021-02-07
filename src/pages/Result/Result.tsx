import React, { useEffect, useState } from "react";
import { Params, Redirect } from "wouter";
import { parse } from "query-string";
import { useQuery } from "react-query";
import axios from "axios";
import { Lyrical, SongSearchFormData } from "@typings/core";
import Loader from "@components/Loader";
import Heading from "@components/Heading";
import { BackLink, Lyrics, TitleWrapper } from "./styled";

type ResultParams = {
  query: string;
};

interface ResultProps {
  params: Params<ResultParams>;
}

const Result: React.FC<ResultProps> = ({ params }) => {
  const [hideLoader, setHideLoader] = useState<boolean>(false);

  const search = parse(params.query) as SongSearchFormData;

  if (!params || !params.query || !search || !search.artist || !search.track)
    return <Redirect to="/" />;

  const { isLoading, error, data } = useQuery<Lyrical>(
    "lyrical",
    async () => {
      try {
        const res = await axios.get(
          `https://api.lyrics.ovh/v1/${search.artist.replaceAll(
            "&",
            "and"
          )}/${search.track.replaceAll("&", "and")}`
        );
        return res.data;
      } catch (error) {
        return error;
      }
    },
    { cacheTime: 1 }
  );

  useEffect(() => {
    if (!isLoading) {
      const t = setTimeout(() => {
        setHideLoader(true);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  const isReady = !isLoading && !error && hideLoader;

  return (
    <div>
      {isReady && data && data.lyrics && <BackLink to="/">Back to Search</BackLink>}
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
        <Lyrics>{data && data.lyrics ? data.lyrics.trim() : "No lyrics found."}</Lyrics>
      )}
      <BackLink to="/">Back to Search</BackLink>
    </div>
  );
};

export default Result;
