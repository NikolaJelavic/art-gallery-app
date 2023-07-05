import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, isLoading } = useSWR(url, fetcher);

  const updatedData = data?.map((item) => ({ ...item, isFavorite: false }));

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={updatedData} />
      <Layout />
    </>
  );
}
