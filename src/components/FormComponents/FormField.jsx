import React from "react";
import { FormControl } from "@chakra-ui/react";

import { InputTextForm } from "./InputTextForm";
import { RadioBoxForm } from "./RadioBoxForm";
import { CheckboxForm } from "./CheckboxForm";
import { AttachDocForm } from "./AttachDocForm";
import { TitleSubtitle } from "./TitleSubtitle";

export const FormField = ({ question, handleChange, onKeyDown }) => {
  const {
    title,
    required,
    subtitle,
    inputText,
    radioBox,
    inputOptions,
    checkbox,
    attachDoc,
  } = question;
  return (
    <FormControl isRequired={required}>
      <TitleSubtitle title={title} subtitle={subtitle} />
      <InputTextForm
        inputText={inputText}
        onChange={handleChange}
        name={title}
        onKeyDown={onKeyDown}
      />
      <RadioBoxForm
        radioBox={radioBox}
        inputOptions={inputOptions}
        onChange={handleChange}
        name={title}
      />
      <CheckboxForm
        checkbox={checkbox}
        inputOptions={inputOptions}
        onChange={handleChange}
        name={title}
      />
      <AttachDocForm attachDoc={attachDoc} />
    </FormControl>
  );
};
