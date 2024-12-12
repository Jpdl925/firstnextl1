import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
      <main>
        <h1>Hello World</h1>
        {/* Link to go to users page */}
        <Link href="/users">Users</Link>
        <ProductCard />
        </main>
  );
}
