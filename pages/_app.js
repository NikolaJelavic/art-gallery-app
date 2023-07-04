import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
      <Layout />
    </>
  );
}
