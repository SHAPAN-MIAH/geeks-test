import Link from "next/link";

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function page() {
  let posts: posts[] = [];

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!response.ok) {
      throw new Error("Failed to fetch the vacancy data");
    }
    const res = await response.json();
    posts = res;
  } catch (error) {
    console.error("Career data is not fetched", error);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {posts?.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post?.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
