import React from "react";
import { Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Route, useHistory } from "react-router-dom";
// import * as Yup from "yup";

import { Question } from "../PageComponents/Question";
import { HeroBrief } from "./HeroBrief";
import { SubmitedPage } from "./Submited";

export const FormQuestions = ({ questions }) => {
  const history = useHistory();

  let initialFormValues = {};
  questions.forEach((field) => {
    initialFormValues[field.title] = field.checkbox ? [] : "";
  });

  // let validationSchema = Yup.object().shape(
  //   questions.map((question) =>
  //     question.required
  //       ? (question.title = Yup.string().required())
  //       : (question.title = Yup.string())
  //   )
  // );

  // let validationSchema = Yup.object().shape({});
  // questions.forEach((field) => {
  //   if (field.required) {
  //     validationSchema[field.title] = Yup.string().required();
  //   } else {
  //     validationSchema[field.title] = Yup.string();
  //   }
  // });
  // const validationSchema = questions.map((question) => ({
  //   ...question,
  //   [question.title]: Yup.string().required,
  // }));
  // console.log(validationSchema);

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
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            history.push("/completado");
          }, 400);
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, errors }) => {
          const handleEnter = (event) => {
            if (event.keyCode === 13) {
              const form = event.target.form;
              const index = Array.prototype.indexOf.call(form, event.target);
              form.elements[index + 1].focus();
              event.preventDefault();
            }
          };
          return (
            <Flex flexDir="column" bg="gray.800">
              <Form onSubmit={handleSubmit}>
                {updatedData.map((question) => {
                  return (
                    <Route key={question.id} path={question.route}>
                      <Question
                        question={question}
                        lastQuestion={lastQuestion}
                        handleChange={handleChange}
                        isSubmitting={isSubmitting}
                        onKeyDown={handleEnter}
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
// const titleToUrl = question.title
//   .replace(/\s+/g, "-")
//   .toLowerCase()
//   .normalize("NFD")
//   .replace(/[\u0300-\u036f]/g, "")
//   .replace(/!+$/, "")
//   .replace(/¡+/g, "")
//   .replace(/,+/g, "");
