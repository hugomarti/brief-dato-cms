import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";

import { TitleForm } from "../FormComponents/TitleForm";
import { SubtitleForm } from "../FormComponents/SubtitleForm";
import { InputTextForm } from "../FormComponents/InputTextForm";
import { RadioBoxForm } from "../FormComponents/RadioBoxForm";
import { CheckboxForm } from "../FormComponents/CheckboxForm";
import { AttachDocForm } from "../FormComponents/AttachDocForm";
import { ButtonForm } from "../FormComponents/ButtonForm";
import { Footer } from "./Footer";

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
    nextRoute,
  },
  lastQuestion,
  handleChange,
  isSubmitting,
  onKeyDown,
}) => {
  return (
    <Center ml="1rem" color="white" h="100vh" pos="relative">
      <Flex w={{ xl: "40%", lg: "40%", md: "50%", base: "90%" }}>
        <Text fontSize="1.5rem" mr="2rem">
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
          <ButtonForm
            lastQuestion={lastQuestion.questionNumber}
            questionNumber={questionNumber}
            isSubmitting={isSubmitting}
            nextRoute={nextRoute}
          />
        </Flex>
      </Flex>
      <Footer questionNumber={questionNumber} />
    </Center>
  );
};
