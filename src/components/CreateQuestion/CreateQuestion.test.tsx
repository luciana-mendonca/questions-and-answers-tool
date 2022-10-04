import { screen } from "@testing-library/react";
import { renderWithProvider } from "../../test-utils/testUtils";
import CreateQuestion from "./CreateQuestion";

describe("<CreateQuestion />", () => {
  it("should render without crashing", () => {
    renderWithProvider(<CreateQuestion />);

    const questionLabel = screen.getByLabelText("Question");

    expect(questionLabel).toBeInTheDocument();
  });
});
