import React from "react";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const AttachDocForm = ({ attachDoc, onChange, name, setFieldValue }) => {
  // const handleChange = (e) => {
  //   if (e.target.files[0].size > 10000000) {
  //     alert("El archivo no puede superar los 10mb");
  //   } else {
  //     onChange(e);
  //     setFieldValue(e);
  //   }
  // };
  return (
    <React.Fragment>
      {attachDoc && (
        <Box>
          <Center
            flexDir="column"
            bg="gray.600"
            _hover={{ bg: "gray.700" }}
            rounded="md"
            border="1px dashed white"
            p="3rem"
            mt="1rem"
            cursor="pointer"
          >
            <AiOutlineCloudUpload size="3rem" color="white" />
            <Text color="#dad8d8">Elige un archivo o arrastra aqui</Text>
            <Button
              my="1rem"
              _hover={{
                bgColor: "rgb(226, 90, 90)",
                color: "#161616",
              }}
              size="sm"
              variant="outline"
              color="rgb(226, 90, 90)"
              borderColor="rgb(226, 90, 90)"
            >
              <input
                style={{ opacity: 0, width: "5px" }}
                type="file"
                name={name}
                onChange={onChange}
              />
              Elige Archivo
            </Button>
          </Center>

          <Input
            autoFocus
            size="lg"
            mt="1rem"
            variant="flushed"
            fontSize="1.2rem"
            focusBorderColor="red.300"
            errorBorderColor="none"
            onChange={onChange}
            name="Enviar documento_Link"
          />
        </Box>
      )}
    </React.Fragment>
  );
};
