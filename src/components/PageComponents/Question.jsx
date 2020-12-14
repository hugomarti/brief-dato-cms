import React, { useState } from "react";
import {
  Flex,
  Text,
  Center,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import { ButtonForm } from "../FormComponents/ButtonForm";
import { Footer } from "./Footer";
import { Field } from "formik";
import { TitleSubtitle } from "../FormComponents/TitleSubtitle";
import { InputTextForm } from "../FormComponents/InputTextForm";
import { RadioBoxForm } from "../FormComponents/RadioBoxForm";
import { CheckboxForm } from "../FormComponents/CheckboxForm";
import { AttachDocForm } from "../FormComponents/AttachDocForm";

export const Question = ({
  question,
  lastQuestion,
  handleChange,
  isSubmitting,
  onKeyDown,
}) => {
  const {
    questionNumber,
    nextRoute,
    title,
    required,
    subtitle,
    inputText,
    radioBox,
    inputOptions,
    checkbox,
    attachDoc,
  } = question;
  const [isDisableButton, setIsDisableButton] = useState(true);

  function validateName(value) {
    let error;
    if (!value && required) {
      error = "This field is required";
    } else {
      setIsDisableButton(false);
    }
    return error;
  }
  return (
    <Center ml="1rem" color="white" h="100vh" pos="relative">
      <Flex w={{ xl: "40%", lg: "40%", md: "50%", base: "90%" }}>
        <Text fontSize="1.5rem" mr="2rem">
          {questionNumber}
        </Text>
        <Flex flexDir="column" alignItems="start">
          <Field name={title} validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isRequired={required}
                isInvalid={form.errors[title] && form.touched[title]}
              >
                <TitleSubtitle title={title} subtitle={subtitle} />
                <FormErrorMessage>{form.errors[title]}</FormErrorMessage>
                <InputTextForm
                  field={field}
                  inputText={inputText}
                  onKeyDown={onKeyDown}
                />
                <RadioBoxForm
                  radioBox={radioBox}
                  inputOptions={inputOptions}
                  field={field}
                  onChange={handleChange}
                  name={title}
                />
                <CheckboxForm
                  checkbox={checkbox}
                  inputOptions={inputOptions}
                  onChange={handleChange}
                  name={title}
                />
                <AttachDocForm
                  attachDoc={attachDoc}
                  name={title}
                  field={field}
                />
              </FormControl>
            )}
          </Field>
          <ButtonForm
            lastQuestion={lastQuestion.questionNumber}
            questionNumber={questionNumber}
            isSubmitting={isSubmitting}
            nextRoute={nextRoute}
            isDisabled={required ? isDisableButton : false}
          />
        </Flex>
      </Flex>
      <Footer questionNumber={questionNumber} />
    </Center>
  );
};
