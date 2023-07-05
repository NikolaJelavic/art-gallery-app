import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>See more</Link>
      <Image src={image} alt={title} width={300} height={200}></Image>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
