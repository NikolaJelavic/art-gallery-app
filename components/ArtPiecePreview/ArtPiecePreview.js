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
  artPiecesInfo,
}) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={350} height={300}></Image>
      </Link>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
