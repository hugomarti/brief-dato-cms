import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FiSend } from "react-icons/fi";

export const ButtonForm = ({ lastQuestion, questionNumber, isSubmitting }) => {
  const lastQuestionMatch = lastQuestion === questionNumber;
  return (
    <React.Fragment>
      <Button
        type={lastQuestionMatch ? "submit" : "button"}
        size="sm"
        colorScheme="teal"
        mt="2rem"
        isLoading={lastQuestionMatch ? isSubmitting : false}
        loadingText="Enviando..."
      >
        <Box mr="0.5rem">{lastQuestionMatch ? <FiSend /> : <CheckIcon />}</Box>
        {lastQuestionMatch ? "Enviar" : "Continuar"}
      </Button>
    </React.Fragment>
  );
};
