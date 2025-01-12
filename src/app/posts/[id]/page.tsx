import React from 'react'

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

async function page({ params }: any) {
  const {id} = await params;
  let post: Post | any

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }

    const responseData = await response.json();

    post = responseData

  } catch (error) {
    console.error("Error fetching blog:", error);
  }



  return (
    <div>
      <ul>
        <li>{post?.id}</li>
        <li>{post?.title}</li>
        <li>{post?.body}</li>
      </ul>
    </div>
  )
}

export default page