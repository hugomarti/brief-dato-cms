import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => (
  <Center h="100vh" bg="#151515">
    <Spinner color="red.500" size="xl" />
  </Center>
);
