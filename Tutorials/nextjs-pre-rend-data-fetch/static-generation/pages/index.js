function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((val) => {
        console.log(val.title);
        <li key={val.id}>{val.title}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default Home;
