import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  //   console.log("isFav:", isFavorite);

  return (
    <button
      onClick={() => onToggleFavorite(slug)}
      className={isFavorite ? "favorite" : ""}
      aria-label={isFavorite ? "true" : "false"}
    >
      {isFavorite ? "❤️" : "🖤"}{" "}
    </button>
  );
}
