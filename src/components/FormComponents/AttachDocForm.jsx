import React from "react";
import { Box, Center, Input, Text } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const AttachDocForm = ({ attachDoc, field, onChange, name }) => {
  return (
    <React.Fragment>
      {attachDoc && (
        <Box>
          <Center
            flexDir="column"
            bg="gray.600"
            _hover={{ bg: "#303030" }}
            rounded="md"
            border="1px dashed white"
            p="3rem"
            mt="1rem"
            cursor="pointer"
          >
            <AiOutlineCloudUpload size="3rem" color="white" />
            <Text color="#dad8d8">Elige un archivo o arrastra aqui</Text>
          </Center>

          <Input
            {...field}
            autoFocus
            size="lg"
            mt="1rem"
            variant="flushed"
            fontSize="1.2rem"
            focusBorderColor="red.300"
            errorBorderColor="none"
            // onChange={onChange}
            // name={name}
            // onKeyPress={data.number === "1" ? null : onKeyPress}
            // name="5_6_Enviar documento_Link"
          />
        </Box>
      )}
    </React.Fragment>
  );
};
