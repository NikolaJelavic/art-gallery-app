import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ColorPalette = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.color};
  margin: 5px;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
  isFavorite,
  onToggleFavorite,
  slug,
}) {
  return (
    <div>
      <Image src={image} alt="image name" width={550} height={450} />
      <ColorContainer>
        {colors.map((color, index) => (
          <ColorPalette key={index} color={color} />
        ))}
      </ColorContainer>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
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
