import React from "react";
import { Button, Flex, Image, Text, Link, Center } from "@chakra-ui/react";

import DigitalLogo from "../../assets/digital-logo.png";

export const SubmitedPage = () => {
  return (
    <Center h="100vh" bg="#1a202c" flexDir="column" color="white">
      <Image src={DigitalLogo} />
      <Text fontWeight="600" fontSize="2rem" letterSpacing="1px">
        ¡Gracias por aplicar!
      </Text>
      <Text
        fontSize="0.8rem"
        mt="0.2rem"
        mb="2rem"
        fontWeight="300"
        color="#cac8c8"
      >
        Nos pondremos en contacto en cuanto revisemos su formulario.
      </Text>
      <Flex>
        <Link isExternal href="https://digitaldosis.com/">
          <Button
            bgColor="rgb(226, 90, 90)"
            _hover={{ bgColor: "rgb(197, 100, 100)" }}
            color="black"
            size="sm"
            fontWeight="200"
          >
            Visita nuestra web
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};
