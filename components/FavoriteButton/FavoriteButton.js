import React from "react";
import useLocalStorageState from "use-local-storage-state";

export default function FavoriteButton({ slug }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-piece-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((pieceInfo) =>
        pieceInfo.slug === slug
          ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
          : pieceInfo
      )
    );
  }
  const artPiece = artPiecesInfo.find((piece) => {
    return piece.slug === slug;
  });

  const isFavorite = artPiece.isFavorite;

  return (
    <button
      onClick={() => {
        handleToggleFavorite(slug);
      }}
      className={isFavorite ? "favorite" : ""}
      aria-label={isFavorite ? "true" : "false"}
    >
      {isFavorite ? "❤️" : "🖤"}{" "}
    </button>
  );
}
