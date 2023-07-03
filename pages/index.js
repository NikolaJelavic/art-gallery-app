import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
