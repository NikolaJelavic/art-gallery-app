import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  console.log("image", image);
  return (
    <div>
      <Image src={image} alt="image name" width={300} height={200} />
      <FavoriteButton />
      <h1>{title}</h1>
      <h2>
        {artist} - {year}
      </h2>
      <h3>{genre}</h3>
      <button>
        <Link href={`/art-pieces`}>Go Back</Link>
      </button>
    </div>
  );
}
