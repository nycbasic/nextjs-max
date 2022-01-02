import fs from "fs/promises";

import path from "path";

function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((val) => {
        return <li key={val.id}>{val.title}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
}

export default Home;
