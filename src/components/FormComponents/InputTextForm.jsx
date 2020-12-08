import React from "react";
import { Flex, Input } from "@chakra-ui/react";

export const InputTextForm = ({ inputText, onChange, name, onKeyDown }) => {
  return (
    <React.Fragment>
      {inputText && (
        <Flex w="40rem" mt="1rem">
          <Input
            placeholder="Escribe aqui tu respuesta..."
            onChange={onChange}
            name={name}
            onKeyDown={onKeyDown}
            autoFocus
            size="lg"
            mt="1rem"
            variant="flushed"
            fontSize="1.2rem"
            focusBorderColor="red.300"
          />
        </Flex>
      )}
    </React.Fragment>
  );
};
