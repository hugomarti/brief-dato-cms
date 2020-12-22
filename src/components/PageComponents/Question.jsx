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
import { FastField, useField } from "formik";
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
  const [value] = useField(question.title);

  function handleValidation(e) {
    let error;
    if (!e.target.value && required) {
      error = "This field is required";
    } else {
      setIsDisableButton(false);
    }
    return error;
  }

  return (
    <Center ml="1rem" color="white" h="100vh" pos="relative">
      <Flex w={{ xl: "40%", lg: "40%", md: "50%", base: "90%" }}>
        <Text fontSize="1.5rem" mr="2rem" mt="0.6rem">
          {questionNumber}
        </Text>
        <Flex flexDir="column" alignItems="start">
          <FastField name={title}>
            {({ field, form }) => {
              return (
                <FormControl
                  isRequired={required}
                  isInvalid={form.errors[title] && form.touched[title]}
                >
                  <TitleSubtitle title={title} subtitle={subtitle} />
                  <FormErrorMessage>{form.errors[title]}</FormErrorMessage>
                  <InputTextForm
                    name={title}
                    handleChange={(e) => {
                      handleChange(e);
                      handleValidation(e);
                    }}
                    inputText={inputText}
                    onKeyDown={onKeyDown}
                  />
                  <RadioBoxForm
                    radioBox={radioBox}
                    inputOptions={inputOptions}
                    onChange={(e) => {
                      handleChange(e);
                      handleValidation(e);
                    }}
                    name={title}
                  />
                  <CheckboxForm
                    checkbox={checkbox}
                    inputOptions={inputOptions}
                    onChange={(e) => {
                      handleChange(e);
                      handleValidation(e);
                    }}
                    name={title}
                    onKeyDown={onKeyDown}
                  />
                  <AttachDocForm
                    attachDoc={attachDoc}
                    name={title}
                    field={field}
                  />
                </FormControl>
              );
            }}
          </FastField>
          <ButtonForm
            lastQuestion={lastQuestion.questionNumber}
            questionNumber={questionNumber}
            isSubmitting={isSubmitting}
            nextRoute={nextRoute}
            isDisabled={required ? isDisableButton : false}
            question={question}
            showInput={value.value}
            hidden={value.value}
          />
        </Flex>
      </Flex>
      <Footer questionNumber={questionNumber} />
    </Center>
  );
};
