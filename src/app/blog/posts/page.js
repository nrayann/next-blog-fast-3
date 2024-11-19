import Link from "next/link";

export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-2xl">Títulos dos posts:</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}><Link href={`/blog/posts/${post.id}/${post.title}`}>{post.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
