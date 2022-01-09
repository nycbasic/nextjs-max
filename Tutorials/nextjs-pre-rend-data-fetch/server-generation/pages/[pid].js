import fs from "fs/promises";
import path from "path";

function productDetailPage(props) {
  const { loadedProducts } = props;

  if (!loadedProducts) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{loadedProducts.title}</h1>
      <p>{loadedProducts.desc}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if(!product) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      loadedProducts: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: params,
    fallback: true,
  };
}

export default productDetailPage;
