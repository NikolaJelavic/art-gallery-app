import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  border-radius: 5px;
`;

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <List>
      {pieces?.map((piece) => {
        return (
          <ArtPiecePreview
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={piece.isFavorite}
            artPiecesInfo={artPiecesInfo}
            colors={piece.colors}
          />
        );
      })}
    </List>
  );
}
