import React, { useState } from "react";
import {
  Box,
  Input,
  Radio,
  RadioGroup,
  SlideFade,
  Stack,
} from "@chakra-ui/react";

export const RadioBoxForm = ({
  inputOptions,
  radioBox,
  onChange,
  name,
  onKeyDown,
}) => {
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    onChange(e);
    if (e.target.value === "Otro") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };
  return (
    <React.Fragment>
      {radioBox && (
        <RadioGroup mt="1rem">
          <Stack>
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
                <Radio
                  w="100%"
                  colorScheme="red"
                  name={name}
                  onChange={handleChange}
                  value={option.option}
                >
                  <Box w="38vw" cursor="pointer" zIndex="1">
                    {option.option}
                  </Box>
                </Radio>
              </Box>
            ))}
            {showInput && (
              <SlideFade in={showInput} offsetY="-20px">
                <Input
                  mt="0.5rem"
                  placeholder="Escribe aqui tu respuesta..."
                  onChange={onChange}
                  name={name}
                  autoFocus
                  size="lg"
                  variant="flushed"
                  fontSize="1.2rem"
                  focusBorderColor="red.300"
                />
              </SlideFade>
            )}
          </Stack>
        </RadioGroup>
      )}
    </React.Fragment>
  );
};
