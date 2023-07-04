// import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ data }) {
  let randNumber = null;
  if (!data) {
    return;
  }

  function random() {
    return (randNumber = Math.floor(Math.random() * data.length));
  }

  random();

  return (
    <div>
      <Spotlight
        image={data[randNumber].imageSource}
        artist={data[randNumber].artist}
      />
      
    </div>
  );
}
