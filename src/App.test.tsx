import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

test("renders the App component without crashing", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText("Q&A Tool")).toBeInTheDocument();
});
