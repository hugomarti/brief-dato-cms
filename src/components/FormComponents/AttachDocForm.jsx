import React, { useState } from "react";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const AttachDocForm = ({ attachDoc, onChange, name, setFieldValue }) => {
  const [fileName, setFileName] = useState("");
  const handleChange = (e) => {
    if (e.target.files[0].size > 10000000) {
      alert("El archivo no puede superar los 10mb");
    } else {
      onChange(e);
      setFieldValue(e);
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <React.Fragment>
      {attachDoc && (
        <Box>
          <Center
            flexDir="column"
            bg="#2c2c2c"
            _hover={{ bg: "#303030" }}
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
                onChange={handleChange}
              />
              Elige Archivo
            </Button>
            <Text>{fileName}</Text>
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
