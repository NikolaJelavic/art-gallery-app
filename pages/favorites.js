import React from "react";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  border-radius: 5px;
`;

export default function favorites({ data, setArtPiecesInfo, artPiecesInfo }) {
  const favoriteArt = artPiecesInfo
    .filter((piece) => piece.isFavorite)
    .map((piece) => piece.slug);

  const favoritePieces = data.filter((piece) =>
    favoriteArt.includes(piece.slug)
  );

  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <List>
        {favoritePieces.map((piece) => (
          <ArtPieces
            key={piece.slug}
            pieces={[piece]}
            handleToggleFavorite={setArtPiecesInfo}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
      </List>
    </>
  );
}
