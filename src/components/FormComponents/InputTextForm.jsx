import React from "react";
import { Flex, Input } from "@chakra-ui/react";

export const InputTextForm = ({ inputText, onChange, name }) => {
  return (
    <React.Fragment>
      {inputText && (
        <Flex w="40rem" mt="1rem">
          <Input
            placeholder="Escribe aqui tu respuesta..."
            onChange={onChange}
            name={name}
          />
        </Flex>
      )}
    </React.Fragment>
  );
};
