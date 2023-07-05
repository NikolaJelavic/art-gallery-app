import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <h1>{artist}</h1>
      <Image src={image} alt={artist} width={300} height={200} />
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      ></FavoriteButton>
    </>
  );
}
