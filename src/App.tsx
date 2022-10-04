import React from "react";
import { CreateQuestion } from "./components/CreateQuestion";
import { Heading } from "./components/Heading";
import { Layout } from "./components/Layout";
import { QuestionList } from "./components/QuestionList";

function App() {
  return (
    <Layout>
      <Heading headingLevel='h1'>Questions & Answers Tool</Heading>
      <CreateQuestion />
      <QuestionList />
    </Layout>
  );
}

export default App;
