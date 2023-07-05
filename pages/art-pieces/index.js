import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  data,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <div className="art-pieces-list">
      <h1>Art Pieces</h1>

      <ArtPieces
        pieces={data}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
