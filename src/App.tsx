import React from "react";
import { CreateQuestion } from "./components/CreateQuestion";
import { Heading } from "./components/Heading";
import { QuestionList } from "./components/QuestionList";

function App() {
  return (
    <div>
      <Heading headingLevel='h1'>Q&A Tool</Heading>
      <CreateQuestion />
      <QuestionList />
    </div>
  );
}

export default App;
