import { Button, Flex, Progress, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";

export const Footer = ({ questionNumber }) => {
  const [isLargerThan767] = useMediaQuery("(min-width: 767px)");
  const history = useHistory();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      pos="absolute"
      bottom="0"
      p="1rem"
      w="100%"
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
      <Flex ml="2rem" w={isLargerThan767 ? "50%" : "100%"} alignItems="center">
        <Text fontSize="sm" mr="1rem">
          {questionNumber} de 30 respondidas
        </Text>
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
