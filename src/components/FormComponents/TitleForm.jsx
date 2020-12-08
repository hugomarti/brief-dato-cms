import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export const TitleForm = ({ title, isRequired }) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel mb="0.5rem" fontSize="2rem">
        {title}
      </FormLabel>
    </FormControl>
  );
};
