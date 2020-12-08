import React from "react";
import { Flex } from "@chakra-ui/react";
import { Formik } from "formik";

import { Question } from "./Question";

export const FormQuestions = ({ questions }) => {
  let initialFormValues = {};
  questions.forEach((field) => {
    initialFormValues[field.title] = field.checkbox ? [] : "";
  });

  const updatedData = questions.map((question, index, elements) => {
    var next = elements[index + 1];

    return {
      ...question,
      route: question.title
        .replace(/\s+/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/!+$/, "")
        .replace(/¡+/g, "")
        .replace(/,+/g, ""),
      questionNumber: index + 1,
    };
  });
  console.log(updatedData);

  const lastQuestion = updatedData.slice(-1)[0];

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => {
        return (
          <Flex flexDir="column" bg="gray.800">
            <form onSubmit={handleSubmit}>
              {updatedData.map((question) => (
                <Question
                  key={question.id}
                  question={question}
                  lastQuestion={lastQuestion}
                  handleChange={handleChange}
                  isSubmitting={isSubmitting}
                />
              ))}
            </form>
          </Flex>
        );
      }}
    </Formik>
  );
};
