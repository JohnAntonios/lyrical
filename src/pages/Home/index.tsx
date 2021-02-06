import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { stringify } from "query-string";
import Button from "@components/Button";
import Heading from "@components/Heading";
import TextField from "@components/TextField";
import { Form, FormFieldWrapper } from "./styled";

const recentSearchValues = localStorage.getItem("recent-search");

const defaultSearchValues: SongSearchFormData = {
  artist: "",
  track: "",
};

if (recentSearchValues) {
  const { artist, track }: SongSearchFormData = JSON.parse(recentSearchValues);
  defaultSearchValues.artist = artist;
  defaultSearchValues.track = track;
}

interface SongSearchForm extends SongSearchFormData {
  remember: boolean;
}

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm<SongSearchForm>();

  const [_, setLocation] = useLocation();
  const onSubmit = handleSubmit((data) => {
    const searchData = { artist: data.artist, track: data.track };

    if (data.remember) {
      localStorage.setItem("recent-search", JSON.stringify(searchData));
    }
    setLocation(`/result/${stringify(searchData)}`);
  });

  return (
    <>
      <Heading align="center" tag="h2" text="lyrical" margin={{ bottom: 4 }} />
      <Form onSubmit={onSubmit} autoComplete="on">
        <FormFieldWrapper>
          <TextField
            populatedValue={defaultSearchValues.artist}
            id="artist"
            labelText="Artist"
            inputRef={register}
            required
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <TextField
            populatedValue={defaultSearchValues.track}
            id="track"
            labelText="Track"
            inputRef={register}
            required
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <label htmlFor="remember">Remember this?</label>
          <input type="checkbox" name="remember" id="remember" ref={register} />
        </FormFieldWrapper>
        <Button text="Search" type="submit" />
      </Form>
    </>
  );
};

export default Home;
