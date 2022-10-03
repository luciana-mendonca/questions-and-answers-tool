import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the App component without crashing", async () => {
  render(<App />);

  expect(screen.getByText("Q&A Tool")).toBeInTheDocument();
});
