import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: xx-large;
`;

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
      <Wrapper>
        <Title>Spotlight</Title>
        <h2>{artist}</h2>
        <Image src={image} alt={artist} width={350} height={400} />
        <FavoriteButton
          isFavorite={artPiece.isFavorite}
          onToggleFavorite={onToggleFavorite}
          artPiece={artPiece}
          slug={slug}
        ></FavoriteButton>
      </Wrapper>
    </>
  );
}
