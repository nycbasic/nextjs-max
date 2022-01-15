import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("regnerating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    // time to regenerate the page/ISR
    revalidate: 10,
  };
}

export default Home;
