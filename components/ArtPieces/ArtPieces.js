import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        const { isFavorite } = artPiecesInfo?.find(
          (item) => item.slug === piece.slug
        );
        return (
          <ArtPiecePreview
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={isFavorite}
          />
        );
      })}
    </ul>
  );
}
