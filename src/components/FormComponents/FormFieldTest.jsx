import React from "react";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { InputTextFormTest } from "./InputTextFormTest";
import { RadioBoxForm } from "./RadioBoxForm";
import { CheckboxForm } from "./CheckboxForm";
import { AttachDocForm } from "./AttachDocForm";
import { Field } from "formik";
import { TitleSubtitle } from "./TitleSubtitle";

export const FormFieldTest = ({ question, handleChange, onKeyDown }) => {
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

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }
  return (
    <Field name={title} validate={validateName}>
      {({ field, form }) => (
        <FormControl
          isRequired={required}
          isInvalid={form.errors[title] && form.touched[title]}
        >
          <TitleSubtitle title={title} subtitle={subtitle} />
          <FormErrorMessage>{form.errors[title]}</FormErrorMessage>
          <InputTextFormTest
            field={field}
            inputText={inputText}
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
      )}
    </Field>
  );
};
