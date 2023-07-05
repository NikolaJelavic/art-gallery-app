import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function Slug({ data }) {
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
    />
  );
}
