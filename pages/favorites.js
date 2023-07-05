import React from "react";
import ArtPieces from "../components/ArtPieces/ArtPieces";

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
      <ul>
        {favoritePieces.map((piece) => (
          <ArtPieces
            key={piece.slug}
            pieces={[piece]}
            handleToggleFavorite={setArtPiecesInfo}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
      </ul>
    </>
  );
}
