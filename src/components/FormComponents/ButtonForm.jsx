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
  titleSection,
  hidden,
}) => {
  const history = useHistory();
  const lastQuestionMatch = lastQuestion === questionNumber;

  const handleHiddenBlock = () => {
    if (hidden === "") {
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
  return (
    <Flex
      align="center"
      mt="2rem"
      opacity={titleSection ? 100 : handleHiddenBlock}
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
        autoFocus={titleSection ? true : false}
        isDisabled={isDisabled}
        cursor={titleSection ? "default" : hableCursor}
      >
        <Box mr="0.5rem">{lastQuestionMatch ? <FiSend /> : <CheckIcon />}</Box>
        {lastQuestionMatch ? "Enviar" : "Continuar"}
      </Button>
      {!isDisabled && (
        <Flex alignItems="center">
          <Text ml="1rem" mr="0.5rem">
            O pulsa enter
          </Text>
          <AiOutlineEnter />
        </Flex>
      )}
    </Flex>
  );
};
