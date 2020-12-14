import React from "react";
import { Flex, Input } from "@chakra-ui/react";

export const InputTextFormTest = ({ inputText, onKeyDown, field }) => {
  return (
    <React.Fragment>
      {inputText && (
        <Flex w="40rem" mt="1rem">
          <Input
            {...field}
            placeholder="Escribe aqui tu respuesta..."
            onKeyDown={onKeyDown}
            autoFocus
            size="lg"
            mt="1rem"
            variant="flushed"
            fontSize="1.2rem"
            focusBorderColor="red.300"
            errorBorderColor="none"
          />
        </Flex>
      )}
    </React.Fragment>
  );
};
