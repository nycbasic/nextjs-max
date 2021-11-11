import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1>Homepage! Added something!a fasd fasdfasdfasdfsf</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Homepage;
