import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState(null);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => pieceInfo.slug === slug)
          ? { slug, isFavorite: !pieceInfo.isFavorite }
          : pieceInfo
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  const { data, isLoading, error } = useSWR(url, fetcher);
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        {...pageProps}
        data={data}
      />
      <Layout />
    </>
  );
}
