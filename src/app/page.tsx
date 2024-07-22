import Image from "next/image";
import Link from "next/link";
import ProductList from './components/GitHubDataFetcher'
export default function Home() {
  return (
    <>
      <div>
        <ProductList />
      </div>
    </>
  );
}
