import ArtPieces from "./ArtPieces.js";
import { render, screen } from "@testing-library/react";

const fakeArtPieces = [
  {
    slug: "man-digital-illustration",
    artist: "Francesco Ungaro",
    name: "Man Digital Illustration",
    imageSource:
      "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
    year: "2006",
    genre: "Modern Art",
    colors: ["#3D803B", "#073204", "#C5DEDB", "#90B59F", "#AFC6B5"],
    dimensions: {
      height: 2581,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "woman-statue",
    artist: "Zack Jarosz",
    name: "Woman Statue",
    imageSource: "https://example-apis.vercel.app/assets/art/woman-statue.jpg",
    year: "2017",
    genre: "Classics",
    colors: ["#161616", "#C9C8C5", "#6B6A69", "#8C8C89", "#8C848C"],
    dimensions: {
      height: 2880,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "majestic-greek-sculpture",
    artist: "Rachel Claire",
    name: "Majestic Greek Sculpture",
    imageSource:
      "https://example-apis.vercel.app/assets/art/majestic-greek-sculpture.jpg",
    year: "2019",
    genre: "Classics",
    colors: ["#978E8B", "#2A201E", "#483833", "#D8D5D8", "#53443B"],
    dimensions: {
      height: 2880,
      width: 1920,
      type: "jpg",
    },
  },
];

test("renders a list of art pieces", () => {
  render(<ArtPieces pieces={fakeArtPieces} />);
  const artPieces = screen.getAllByRole("list");
  expect(artPieces).toHaveLength(1);
});
