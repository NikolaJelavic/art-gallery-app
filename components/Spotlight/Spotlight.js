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
      <h1>{artist}</h1>
      <Image src={image} alt={artist} width={300} height={200} />
      <FavoriteButton
        isFavorite={artPiece.isFavorite}
        onToggleFavorite={onToggleFavorite}
        artPiece={artPiece}
        slug={slug}
      ></FavoriteButton>
    </>
  );
}
