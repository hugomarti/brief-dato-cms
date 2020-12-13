import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";

import { ButtonForm } from "../FormComponents/ButtonForm";
import { FormFieldTest } from "../FormComponents/FormFieldTest";
import { Footer } from "./Footer";

export const Question = ({
  question,
  lastQuestion,
  handleChange,
  isSubmitting,
  onKeyDown,
}) => {
  const { questionNumber, nextRoute } = question;
  return (
    <Center ml="1rem" color="white" h="100vh" pos="relative">
      <Flex w={{ xl: "40%", lg: "40%", md: "50%", base: "90%" }}>
        <Text fontSize="1.5rem" mr="2rem">
          {questionNumber}
        </Text>
        <Flex flexDir="column" alignItems="start">
          <FormFieldTest
            question={question}
            handleChange={handleChange}
            onKeyDown={onKeyDown}
          />
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
