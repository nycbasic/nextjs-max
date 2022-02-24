import Image from "next/image";
import classes from "./hero.module.css";

const { hero, image } = classes;

export default function Hero() {
  return (
    <section className={hero}>
      <div className={image}>
        <Image
          src="/images/site/some.png"
          alt="Image showing me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Spoon</h1>
      <p>Something Something Something....about your experience</p>
    </section>
  );
}
