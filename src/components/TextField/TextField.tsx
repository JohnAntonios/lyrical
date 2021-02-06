import React, { useEffect, useState } from "react";
import {
  TextFieldInput,
  TextFieldLabel,
  TextFieldProps,
  TextFieldWrapper,
} from "./styled";

const TextField: React.FC<TextFieldProps> = ({
  id,
  inputRef,
  required,
  labelText,
  populatedValue,
}) => {
  const [changed, setChanged] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    if (populatedValue) setChanged(true);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChanged(e.target.value.length > 0);
  };

  const onFocus = () => setFocused(true);

  const onBlur = () => setFocused(false);

  return (
    <TextFieldWrapper focused={focused} onFocus={onFocus} onBlur={onBlur}>
      <TextFieldLabel focused={focused} changed={changed} htmlFor={id}>
        {labelText}
      </TextFieldLabel>
      <TextFieldInput
        {...(populatedValue && { defaultValue: populatedValue })}
        onChange={onChange}
        id={id}
        name={id}
        type="text"
        ref={inputRef}
        required={required}
      />
    </TextFieldWrapper>
  );
};

export default TextField;
