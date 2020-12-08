import React from "react";
import { useQuery } from "graphql-hooks";

import { FormQuestions } from "./components/FormQuestions";
import { LoadingSpinner } from "./components/LoadingSpiner";

const HOMEPAGE_QUERY = `query MyQuery {
  allBrief1s(first: 100) {
    id
    required
    title
    subtitle
    inputText
    checkbox
    radioBox
    attachDoc
    inputOptions {
      id
      option
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 30,
    },
  });
  if (error) return "Something Bad Happened";

  return (
    <React.Fragment>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <FormQuestions questions={data.allBrief1s} />
      )}
    </React.Fragment>
  );
}
export default App;
