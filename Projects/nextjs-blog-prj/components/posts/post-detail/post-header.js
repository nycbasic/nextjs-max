import Image from "next/image";
import classes from "./post-header.module.css";

const { header } = classes;

export default function PostHeader({ title, image }) {
  return (
    <header className={header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}
