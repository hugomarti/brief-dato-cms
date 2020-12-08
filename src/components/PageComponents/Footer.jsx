import { Button, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const Footer = ({ questionNumber }) => {
  const history = useHistory();
  return (
    <Flex
      pos="absolute"
      bottom="0"
      p="1rem"
      w="100%"
      justifyContent="space-between"
    >
      <Button
        size="sm"
        bgColor="rgb(226, 90, 90)"
        _hover={{ bgColor: "rgb(197, 100, 100)" }}
        color="black"
        fontWeight="200"
        onClick={() => history.goBack()}
      >
        Atras
      </Button>
      <Flex w="50%" alignItems="center">
        <Text>{questionNumber} de 30 respondidas</Text>
        <Progress
          mt="0.5rem"
          colorScheme="red"
          size="xs"
          max={30}
          value={questionNumber}
          w="100%"
        />
      </Flex>
    </Flex>
  );
};
