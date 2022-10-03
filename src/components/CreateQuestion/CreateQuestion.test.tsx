import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import CreateQuestion from "./CreateQuestion";

describe("<CreateQuestion />", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <CreateQuestion />
      </Provider>
    );

    const questionLabel = screen.getByLabelText("Question");

    expect(questionLabel).toBeInTheDocument();
  });
});
