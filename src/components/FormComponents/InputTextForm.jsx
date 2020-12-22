import React from "react";
import { Flex, Input } from "@chakra-ui/react";

export const InputTextForm = ({
  inputText,
  onKeyDown,
  field,
  handleChange,
  name,
}) => {
  return (
    <React.Fragment>
      {inputText && (
        <Flex w="100%" mt="1rem">
          <Input
            // {...field}
            onChange={handleChange}
            name={name}
            onKeyDown={onKeyDown}
            placeholder="Escribe aqui tu respuesta..."
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
