import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => (
  <Center h="100vh" bg="gray.800">
    <Spinner color="red.500" size="xl" />
  </Center>
);
