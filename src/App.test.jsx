import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders list of products", async () => {
  render(<App />);

  await screen.findByText("List View");
});
