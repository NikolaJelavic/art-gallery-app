import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({
  data,
  onToggleFavorite,
  isFavorite,
  slug,
}) {
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
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        slug={slug}
      />
    </div>
  );
}
