import React from "react";
import { CreateQuestion } from "./components/CreateQuestion";
import { QuestionList } from "./components/QuestionList";

function App() {
  return (
    <div>
      <h1>Q&A Tool</h1>
      <CreateQuestion />
      <QuestionList />
    </div>
  );
}

export default App;
