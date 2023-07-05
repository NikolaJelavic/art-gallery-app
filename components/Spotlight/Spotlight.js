import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  slug,
  artPiece,
}) {
  if (!artPiece) {
    return null;
  }

  return (
    <>
      <h1>Spotlight</h1>

      <h2>{artist}</h2>
      <Image src={image} alt={artist} width={350} height={400} />
      <FavoriteButton
        isFavorite={artPiece.isFavorite}
        onToggleFavorite={onToggleFavorite}
        artPiece={artPiece}
        slug={slug}
      ></FavoriteButton>
    </>
  );
}
