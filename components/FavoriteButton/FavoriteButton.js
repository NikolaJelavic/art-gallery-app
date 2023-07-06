import React from "react";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

// const favButton = styled.button`
//   position: ${({ positionAbsolute }) =>
//     positionAbsolute ? "absolute" : "static"};
//   right: 1rem;
//   top: 1.5rem;
//   z-index: 1;
//   background-color: ${(props) => (props.isFavorite ? "lightcoral" : "white")};
//   border: 3px solid black;
//   border-radius: 50%;
//   display: grid;
//   place-items: center;
//   width: 50px;
//   height: 50px;
//   padding: 0.2rem 0 0;
// `;

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
