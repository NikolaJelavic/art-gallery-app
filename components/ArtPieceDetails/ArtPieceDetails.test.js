import ArtPieceDetails from "./ArtPieceDetails.js";
import { render, screen } from "@testing-library/react";

test("renders image, title and genre", () => {
    render(
      <ArtPieceDetails 
      image="https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg" 
      title="Majestic Greek Sculpture" 
      artist="Steve Johnson"
      year="2019"
      genre="Abstract Painting"
      />
    );
    const imageExample = screen.getByRole("img", {
      image:
        "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
    });
    expect(imageExample).toBeInTheDocument();

    const titleExample = screen.getByText("Majestic Greek Sculpture", {
        title: "Majestic Greek Sculpture",
      });
      expect(titleExample).toBeInTheDocument();

      
      const genre = screen.getByText("Abstract Painting", {
          genre: "Abstract Painting",
        });
        expect(genre).toBeInTheDocument();
    });

    // test("renders artist and year", () => {
    //     render(
    //       <ArtPieceDetails   
    //       artist="Min An"
    //       year="2017"
    //       />
    //     );
    //     const artist = screen.getByText("Min An");
    //   expect(artist).toBeInTheDocument();
      
    // const year = screen.getByText("2017");
    //   expect(year).toBeInTheDocument();
    // });