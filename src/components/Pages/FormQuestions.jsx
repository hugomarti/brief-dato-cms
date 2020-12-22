import React from "react";
import { Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Route, useHistory } from "react-router-dom";

import { Question } from "../PageComponents/Question";
import { HeroBrief } from "./HeroBrief";
import { SubmitedPage } from "./Submited";

export const FormQuestions = ({ questions }) => {
  const history = useHistory();

  let initialFormValues = {};
  questions.forEach((field) => {
    initialFormValues[field.title] = field.checkbox ? [] : "";
  });

  const updatedData = questions.map((question, index) => ({
    ...question,
    route: "/pregunta-" + (index + 1),
    nextRoute: "/pregunta-" + (index + 2),
    questionNumber: index + 1,
  }));

  const lastQuestion = updatedData.slice(-1)[0];

  return (
    <React.Fragment>
      <Route exact path="/">
        <HeroBrief />
      </Route>

      <Formik
        initialValues={initialFormValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // console.log(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
            history.push("/completado");
          }, 400);
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, setFieldValue }) => {
          return (
            <Flex flexDir="column" bg="#151515">
              <Form onSubmit={handleSubmit}>
                {updatedData.map((question) => {
                  const handleEnter = (event) => {
                    if (event.keyCode === 13) {
                      const form = event.target.form;
                      const index = Array.prototype.indexOf.call(
                        form,
                        event.target
                      );
                      form.elements[index + 1].focus();
                      event.preventDefault();
                    }
                  };

                  return (
                    <Route key={question.id} path={question.route}>
                      <Question
                        question={question}
                        lastQuestion={lastQuestion}
                        handleChange={handleChange}
                        isSubmitting={isSubmitting}
                        onKeyDown={handleEnter}
                        setFieldValue={(event) =>
                          setFieldValue(question.title, event.target.files[0])
                        }
                      />
                    </Route>
                  );
                })}
              </Form>
            </Flex>
          );
        }}
      </Formik>
      <Route path="/completado">
        <SubmitedPage />
      </Route>
    </React.Fragment>
  );
};
