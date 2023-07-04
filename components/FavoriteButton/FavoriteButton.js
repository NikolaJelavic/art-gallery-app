import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return <button onClick={onToggleFavorite}>{isFavorite ? "✨" : "🖤"}</button>;
}
