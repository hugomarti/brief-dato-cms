import React from "react";
import ReactDOM from "react-dom";
import { GraphQLClient, ClientContext } from "graphql-hooks";

import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "Bearer ca67bc092248ae0a41639d8ba88cf7",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
