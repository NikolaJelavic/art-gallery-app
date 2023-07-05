import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function Slug({ data, onToggleFavorite, artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = data.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.name}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
      colors={selectedArtPiece.colors}
      onToggleFavorite={onToggleFavorite}
      slug={slug}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
