import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, isLoading } = useSWR(url, fetcher);

  const updatedData = data?.map((item) => ({ ...item, isFavorite: false }));

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-piece-info",
    { defaultValue: updatedData }
  );

  function handleToggleFavorite(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((pieceInfo) =>
        pieceInfo.slug === slug
          ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
          : pieceInfo
      )
    );
  }

  if (!artPiecesInfo) return;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo ? artPiecesInfo : []}
        onToggleFavorite={handleToggleFavorite}
        data={updatedData}
      />
      <Layout />
    </>
  );
}
