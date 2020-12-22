import React, { useState } from "react";
import { FastField, useField } from "formik";
import { Flex, Text, Center, FormControl } from "@chakra-ui/react";

import { Footer } from "./Footer";
import { ButtonForm } from "../FormComponents/ButtonForm";
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
  setFieldValue,
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
  const [requiredMessage, setRequiredMessage] = useState("");
  const [value] = useField(question.title);

  function handleValidation(e) {
    if (!e.target.value && required) {
      setRequiredMessage("Este campo es obligatorio");
    } else {
      setRequiredMessage("");
      setIsDisableButton(false);
    }
  }

  return (
    <Center mx="1rem" color="white" h="100vh" pos="relative">
      <Flex w={{ xl: "50%", lg: "50%", md: "50%", base: "90%" }}>
        <Text fontSize="1.5rem" mr="2rem" mt="0.6rem">
          {questionNumber}
        </Text>

        <Flex flexDir="column" alignItems="start">
          <FastField name={title}>
            {() => {
              return (
                <FormControl isRequired={required}>
                  <TitleSubtitle
                    title={title}
                    subtitle={subtitle}
                    errorMessage={requiredMessage}
                  />

                  <InputTextForm
                    name={title}
                    inputText={inputText}
                    onKeyDown={onKeyDown}
                    handleChange={(e) => {
                      handleChange(e);
                      handleValidation(e);
                    }}
                  />

                  <RadioBoxForm
                    radioBox={radioBox}
                    inputOptions={inputOptions}
                    name={title}
                    onKeyDown={onKeyDown}
                    onChange={(e) => {
                      handleChange(e);
                      handleValidation(e);
                    }}
                  />

                  <CheckboxForm
                    checkbox={checkbox}
                    inputOptions={inputOptions}
                    name={title}
                    onKeyDown={onKeyDown}
                    onChange={(e) => {
                      handleChange(e);
                      handleValidation(e);
                    }}
                  />

                  <AttachDocForm
                    attachDoc={attachDoc}
                    onChange={handleChange}
                    name={title}
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
