import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
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
          />
        );
      })}
    </ul>
  );
}
