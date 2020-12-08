import React, { useState } from "react";
import { Box, Checkbox, Input, SlideFade, Stack } from "@chakra-ui/react";

export const CheckboxForm = ({ inputOptions, checkbox, onChange, name }) => {
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "Otro") {
      setShowInput(!showInput);
    }
    onChange(e);
  };
  return (
    <React.Fragment>
      {checkbox && (
        <Stack mt="1rem">
          {inputOptions.map((option) => (
            <Box
              key={option.id}
              _hover={{ bg: "#4b4b4b" }}
              rounded="md"
              py="0.3rem"
              px="1rem"
              mt="1rem"
              border="1px solid white"
              w="40vw"
            >
              <Checkbox
                w="100%"
                colorScheme="red"
                onChange={handleChange}
                name={name}
                value={option.option}
              >
                {option.option}
              </Checkbox>
            </Box>
          ))}
          {showInput && (
            <SlideFade in={showInput} offsetY="-20px">
              <Input
                mt="0.5rem"
                placeholder="Escribe aqui tu respuesta..."
                onChange={onChange}
                name={`${name}_Otro`}
                autoFocus
                size="lg"
                variant="flushed"
                fontSize="1.2rem"
                focusBorderColor="red.300"
              />
            </SlideFade>
          )}
        </Stack>
      )}
    </React.Fragment>
  );
};
