import ArtPiecePreview from "./ArtPiecePreview";
import { render, screen } from "@testing-library/react";

test("renders image", () => {
  render(
    <ArtPiecePreview image="https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg" />
  );
  const imageExample = screen.getByRole("img", {
    image:
      "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
  });
  expect(imageExample).toBeInTheDocument();
});

test("renders title", () => {
  render(<ArtPiecePreview title="Majestic Greek Sculpture" />);
  const titleExample = screen.getByRole("heading", {
    name: "Majestic Greek Sculpture",
  });
  expect(titleExample).toBeInTheDocument();
});

test("renders artist", () => {
  render(<ArtPiecePreview artist="Rachel Claire" />);
  const artist = screen.getByText("Rachel Claire", {
    artist: "Rachel Claire",
  });
  expect(artist).toBeInTheDocument();
});
