import React, { useState } from "react";
import { Checkbox, Input, SlideFade, Stack } from "@chakra-ui/react";

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
            <Checkbox
              key={option.id}
              onChange={handleChange}
              name={name}
              value={option.option}
            >
              {option.option}
            </Checkbox>
          ))}
          {showInput && (
            <SlideFade in={showInput} offsetY="-20px">
              <Input
                mt="0.5rem"
                placeholder="Escribe aqui tu respuesta..."
                onChange={onChange}
                name={`${name}_Otro`}
              />
            </SlideFade>
          )}
        </Stack>
      )}
    </React.Fragment>
  );
};
