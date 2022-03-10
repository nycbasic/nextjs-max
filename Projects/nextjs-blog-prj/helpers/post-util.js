import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "data");

export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const slug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map((post) => {
    return getPostData(post);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.data > b.data ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
