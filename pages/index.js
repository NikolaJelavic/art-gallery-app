import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ data }) {
  let randNumber = null;
  if (!data) {
    return;
  }

  function random() {
    const randNumber = Math.floor(Math.random() * (data.length - 1));
    return data[randNumber];
  }
  const artPiece = random();

  console.log(artPiece);

  return (
    <div>
      <Spotlight
        image={artPiece.imageSource}
        artist={artPiece.artist}
        slug={artPiece.slug}
        artPiece={artPiece}
      />
    </div>
  );
}
