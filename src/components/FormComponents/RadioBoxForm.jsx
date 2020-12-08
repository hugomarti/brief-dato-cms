import React, { useState } from "react";
import { Input, Radio, RadioGroup, SlideFade, Stack } from "@chakra-ui/react";

export const RadioBoxForm = ({ inputOptions, radioBox, onChange, name }) => {
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
              <Radio
                key={option.id}
                name={name}
                onChange={handleChange}
                value={option.option}
              >
                {option.option}
              </Radio>
            ))}
            {showInput && (
              <SlideFade in={showInput} offsetY="-20px">
                <Input
                  mt="0.5rem"
                  placeholder="Escribe aqui tu respuesta..."
                  onChange={onChange}
                  name={name}
                />
              </SlideFade>
            )}
          </Stack>
        </RadioGroup>
      )}
    </React.Fragment>
  );
};
