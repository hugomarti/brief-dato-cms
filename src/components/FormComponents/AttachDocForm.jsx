import React from "react";
import { Center, Text } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const AttachDocForm = ({ attachDoc }) => {
  return (
    <React.Fragment>
      {attachDoc && (
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
      )}
    </React.Fragment>
  );
};
