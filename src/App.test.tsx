import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProvider } from "./test-utils/testUtils";

test("renders the App component without crashing", async () => {
  renderWithProvider(<App />);

  expect(screen.getByText("Q&A Tool")).toBeInTheDocument();
});
