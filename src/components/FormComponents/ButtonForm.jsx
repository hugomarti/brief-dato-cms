import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FiSend } from "react-icons/fi";
import { useHistory } from "react-router-dom";

export const ButtonForm = ({
  lastQuestion,
  questionNumber,
  isSubmitting,
  nextRoute,
}) => {
  const history = useHistory();
  const lastQuestionMatch = lastQuestion === questionNumber;
  return (
    <React.Fragment>
      <Button
        bgColor="rgb(226, 90, 90)"
        _hover={{ bgColor: "rgb(197, 100, 100)" }}
        color="black"
        fontWeight="200"
        size="sm"
        type={lastQuestionMatch ? "submit" : "button"}
        mt="2rem"
        isLoading={lastQuestionMatch ? isSubmitting : false}
        loadingText="Enviando..."
        onClick={() => !lastQuestionMatch && history.push(nextRoute)}
        autoFocus
      >
        <Box mr="0.5rem">{lastQuestionMatch ? <FiSend /> : <CheckIcon />}</Box>
        {lastQuestionMatch ? "Enviar" : "Continuar"}
      </Button>
    </React.Fragment>
  );
};
