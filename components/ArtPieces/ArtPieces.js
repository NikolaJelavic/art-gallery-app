import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </ul>
  );
}
