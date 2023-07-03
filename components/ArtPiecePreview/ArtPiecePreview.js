import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image src={image} alt={title} width={300} height={200}></Image>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
