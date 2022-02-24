import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

const { post, image, content } = classes;

export default function PostItem({ title, img, date, text, slug }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${img}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={post}>
      <Link href={linkPath}>
        <a>
          <div className={image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
          </div>
          <div className={content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
