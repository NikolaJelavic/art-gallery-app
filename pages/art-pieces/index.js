import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({ data }) {
  return (
    <div className="art-pieces-list">
      <ArtPieces pieces={data} />
    </div>
  );
}
