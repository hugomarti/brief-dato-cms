import React from "react";
import { Button, Flex, Image, Text, Center } from "@chakra-ui/react";

import DigitalLogo from "../../assets/digital-logo.png";
import { useHistory } from "react-router-dom";

export const HeroBrief = () => {
  const history = useHistory();
  return (
    <Center h="100vh" bg="#1a202c" flexDir="column">
      <Image src={DigitalLogo} />
      <Text
        fontWeight="600"
        letterSpacing="1px"
        fontSize="1.5rem"
        color="white"
      >
        Briefing: Website Project
      </Text>
      <Text
        fontSize="1rem"
        mt="0.2rem"
        mb="2rem"
        fontWeight="300"
        color="#cac8c8"
      >
        Tiempo para completar: ...
      </Text>
      <Flex>
        <Button
          bgColor="rgb(226, 90, 90)"
          _hover={{ bgColor: "rgb(197, 100, 100)" }}
          color="black"
          size="sm"
          fontWeight="200"
          onClick={() => history.push("/pregunta-1")}
        >
          Comenzar
        </Button>
      </Flex>
    </Center>
  );
};
