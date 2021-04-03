import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { stringify } from "query-string";
import Button from "@components/Button";
import Heading from "@components/Heading";
import TextField from "@components/TextField";
import { SongSearchFormData } from "$typings";
import { Form, FormFieldWrapper } from "./styled";
import { HEADING_TEXT, SUBMIT_TEXT, FORM_FIELDS } from "./constants";

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm<SongSearchFormData>();
  const [_, setLocation] = useLocation();

  const onSubmit = handleSubmit((data) => {
    setLocation(`/result/${stringify(data)}`);
  });

  return (
    <>
      <Heading
        align="center"
        tag="h2"
        text={HEADING_TEXT}
        margin={{ bottom: 5 }}
      />
      <Form onSubmit={onSubmit} autoComplete="on">
        {FORM_FIELDS.map((field) => (
          <FormFieldWrapper key={field.toLowerCase()}>
            <TextField
              id={field.toLowerCase()}
              labelText={field}
              inputRef={register}
              required
            />
          </FormFieldWrapper>
        ))}
        <FormFieldWrapper>
          <Button text={SUBMIT_TEXT} type="submit" />
        </FormFieldWrapper>
      </Form>
    </>
  );
};

export default Home;
