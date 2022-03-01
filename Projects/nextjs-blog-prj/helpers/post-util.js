import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const slug = fileName.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    slug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.data > b.data ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedPosts() {
  const getAllPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
