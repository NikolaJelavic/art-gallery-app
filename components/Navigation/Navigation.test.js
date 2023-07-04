import Navigation from "./Navigation";
import { render, screen } from "@testing-library/react";

test("renders a navigation link labeled Spotlight", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", { name: "SpotlightPage" });
  expect(spotlightLink).toBeInTheDocument();
});

test("renders a navigation link labeled Art Pieces", () => {
  render(<Navigation />);
  const artPiecesLink = screen.getByRole("link", { name: "Art Pieces" });
  expect(artPiecesLink).toBeInTheDocument();
});
