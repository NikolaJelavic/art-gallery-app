import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* padding-bottom: 40px; */
`;
const ColorPalette = styled.div`
  width: 80px;
  height: 30px;
  background-color: ${(props) => props.color};
  margin: 5px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Genre = styled.h2`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 0;
  text-align: center;
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
    <Wrapper>
      <Image src={image} alt="image name" width={450} height={400} />
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
      <h1>
        {title} by {artist} - {year}
      </h1>
      <Genre>{genre}</Genre>
      <button>
        <Link href={`/art-pieces`}>Go Back</Link>
      </button>
    </Wrapper>
  );
}
