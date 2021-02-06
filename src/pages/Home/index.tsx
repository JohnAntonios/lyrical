import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { stringify } from "query-string";
import Button from "@components/Button";
import Heading from "@components/Heading";
import TextField from "@components/TextField";
import { SongSearchFormData } from "@typings/core";
import { Form, FormFieldWrapper } from "./styled";

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm<SongSearchFormData>();
  const [_, setLocation] = useLocation();

  const onSubmit = handleSubmit((data) => {
    setLocation(`/result/${stringify(data)}`);
  });

  return (
    <>
      <Heading align="center" tag="h2" text="lyrical" margin={{ bottom: 5 }} />
      <Form onSubmit={onSubmit} autoComplete="on">
        <FormFieldWrapper>
          <TextField
            id="artist"
            labelText="Artist"
            inputRef={register}
            required
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <TextField
            id="track"
            labelText="Track"
            inputRef={register}
            required
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Button text="Search" type="submit" />
        </FormFieldWrapper>
      </Form>
    </>
  );
};

export default Home;
