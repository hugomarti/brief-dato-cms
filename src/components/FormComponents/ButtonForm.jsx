import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FiSend } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { AiOutlineEnter } from "react-icons/ai";

export const ButtonForm = ({
  lastQuestion,
  questionNumber,
  isSubmitting,
  nextRoute,
  isDisabled,
  question,
  hidden,
}) => {
  const { titleSection, radioBox, checkbox, inputText } = question;
  const history = useHistory();
  const lastQuestionMatch = lastQuestion === questionNumber;

  const handleHiddenBlock = () => {
    if (hidden === "" || hidden.length === 0) {
      return 0;
    }
    if (hidden.length > 1) {
      return 100;
    }
  };
  const hableCursor = () => {
    if (hidden === "") {
      return "default";
    }
    if (hidden.length > 1) {
      return "pointer";
    }
  };

  const handleFocus = () => {
    if (titleSection === true) {
      return true;
    }
    if (radioBox === true) {
      return true;
    }
    if (checkbox === true) {
      return true;
    }
    if (inputText === true) {
      return false;
    } else {
      return false;
    }
  };
  return (
    <Flex align="center" mt="1.5rem">
      <Flex alignItems="center">
        <Text mr="0.5rem">Pulsa enter</Text>
        <AiOutlineEnter />
      </Flex>
      <Box
        opacity={
          question.titleSection || lastQuestionMatch ? 100 : handleHiddenBlock
        }
        ml="1rem"
        mr="0.5rem"
      >
        <Button
          bgColor="rgb(226, 90, 90)"
          _hover={{ bgColor: "rgb(197, 100, 100)" }}
          color="black"
          fontWeight="200"
          size="sm"
          type={lastQuestionMatch ? "submit" : "button"}
          isLoading={lastQuestionMatch ? isSubmitting : false}
          loadingText="Enviando..."
          onClick={() => !lastQuestionMatch && history.push(nextRoute)}
          autoFocus={handleFocus()}
          isDisabled={isDisabled}
          cursor={titleSection ? "default" : hableCursor}
        >
          <Box mr="0.5rem">
            {lastQuestionMatch ? <FiSend /> : <CheckIcon />}
          </Box>
          {lastQuestionMatch ? "Enviar" : "Continuar"}
        </Button>
      </Box>
    </Flex>
  );
};
