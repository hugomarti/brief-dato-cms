import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { TitleForm } from "./FormComponents/TitleForm";
import { SubtitleForm } from "./FormComponents/SubtitleForm";
import { InputTextForm } from "./FormComponents/InputTextForm";
import { RadioBoxForm } from "./FormComponents/RadioBoxForm";
import { CheckboxForm } from "./FormComponents/CheckboxForm";
import { AttachDocForm } from "./FormComponents/AttachDocForm";
import { ButtonForm } from "./FormComponents/ButtonForm";

export const Question = ({
  question: {
    questionNumber,
    title,
    required,
    subtitle,
    inputText,
    radioBox,
    inputOptions,
    checkbox,
    attachDoc,
  },
  lastQuestion,
  handleChange,
  isSubmitting,
}) => {
  return (
    <Flex mb="5rem" ml="1rem" color="white" alignItems="flex-start">
      <Text mt="1rem" mr="2rem">
        {questionNumber}
      </Text>
      <Flex flexDir="column" alignItems="start">
        <TitleForm
          title={title}
          isRequired={required}
          questionNumber={questionNumber}
        />
        <SubtitleForm subtitle={subtitle} />
        <InputTextForm
          inputText={inputText}
          onChange={handleChange}
          name={title}
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
        <ButtonForm
          lastQuestion={lastQuestion.questionNumber}
          questionNumber={questionNumber}
          isSubmitting={isSubmitting}
        />
      </Flex>
    </Flex>
  );
};
