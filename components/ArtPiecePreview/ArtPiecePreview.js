import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`} >See more</Link>
      <Image src={image} alt={title} width={300} height={200}></Image>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
