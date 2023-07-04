import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  
  let randNumber = null;
if (!data){return}

  function random(){
    return (randNumber=Math.floor(Math.random()*data.length))
  };
  
  random();
  
  return (
    <div>
      <Spotlight image={data[randNumber].imageSource} artist={data[randNumber].artist}/>
      <ArtPieces pieces={data} />
    </div>
  );
}
