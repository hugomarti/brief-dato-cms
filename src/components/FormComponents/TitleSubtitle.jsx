import React from "react";
import { Box, FormLabel, Text } from "@chakra-ui/react";

export const TitleSubtitle = ({ title, subtitle }) => {
  return (
    <Box>
      <FormLabel
        mb="0.5rem"
        fontSize="2rem"
        fontWeight="600"
        letterSpacing="1px"
        htmlFor={title}
      >
        {title}
      </FormLabel>
      <Text color="#cac8c8" fontWeight="200">
        {subtitle}
      </Text>
    </Box>
  );
};
